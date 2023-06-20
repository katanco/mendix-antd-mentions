/**
 * This file was generated from AntdMentions.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue, EditableValue, ListValue, ListAttributeValue, ReferenceValue, ReferenceSetValue } from "mendix";

export interface AutoCompleteConfigObjectType {
    trigger: DynamicValue<string>;
    tokenDataSource?: ListValue;
    tokenReference: ReferenceValue | ReferenceSetValue;
    tokenDataSourceTextAttribute?: ListAttributeValue<string>;
}

export interface AutoCompleteConfigObjectPreviewType {
    trigger: string;
    tokenDataSource: {} | { caption: string } | { type: string } | null;
    tokenReference: string;
    tokenDataSourceTextAttribute: string;
}

export interface AntdMentionsContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    textAttribute: EditableValue<string>;
    autoCompleteConfigObject: AutoCompleteConfigObjectType[];
}

export interface AntdMentionsPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    textAttribute: string;
    autoCompleteConfigObject: AutoCompleteConfigObjectPreviewType[];
}
