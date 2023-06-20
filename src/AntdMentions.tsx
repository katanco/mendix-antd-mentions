import { ReactElement, createElement, useState, useEffect } from "react";
import { Mentions } from "antd";
import { AntdMentionsContainerProps } from "../typings/AntdMentionsProps";

import "./ui/AntdMentions.css";

interface optionsType {
    [key: string]: string[];
}

export function AntdMentions(props: AntdMentionsContainerProps): ReactElement {
    
  const [prefix, setPrefix] = useState('@');
  const [data, setData] = useState<optionsType>({});
  const onSearch = (_: any, newPrefix: string) => {
    setPrefix(newPrefix);
  };
  useEffect(() => {
    let newData: optionsType = {};
    props.autoCompleteConfigObject.forEach(config => {
        if (config.trigger.value && config.tokenDataSource?.items && config.tokenDataSourceTextAttribute) {
            newData[config.trigger.value] = config.tokenDataSource.items.map(
                item => config.tokenDataSourceTextAttribute!.get(item).displayValue
            );
        }
    });
    setData(newData);
  }, [props.autoCompleteConfigObject])
  
    
    return <Mentions
      style={{
        width: '100%',
      }}
      placeholder="input @ to mention people, # to mention tag"
      prefix={['@', '#']}
      onSearch={onSearch}
      options={(data[prefix] || []).map((value) => ({
        key: value,
        value,
        label: value,
      }))}
    />
}
