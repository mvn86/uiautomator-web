import { VNode } from "preact";

export interface ClickMouseEvent extends MouseEvent {
    during?: number
}

export interface Config {
    el?: HTMLDivElement
    loadXML?: () => Promise<Document>
    screenShot?: () => Promise<string>
    onload?: (img: HTMLImageElement) => void
    onerror?: (e) => void
    HEIGHT?: number
    onChange?: (data, node: Element) => void
    onClick?: (e: ClickMouseEvent, data, node: Element) => void
    onInput?: (value: string, data, node: Element) => void
    onSwipe?: (from: MouseEvent, to: MouseEvent, during: number) => void
    columns_enabled?: string[]
    columns_checked?: string[]
    contentmenu?: (node: Element) => VNode | string
}

export interface Store extends Config {
    needReload?: boolean
    doc?: Document
    width?: number
    height?: number
    src?: string
    focus?: Element
    expends?: Set<Element>
    clickable_filter?: boolean
}

export interface Bounds {
    left: number
    top: number
    right: number
    bottom: number
}

export interface ScreenNode {
    bounds: Bounds,
    size: number,
    node: Element
}