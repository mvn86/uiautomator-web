export interface Config {
    el?: HTMLElement
    loadXML?: () => Promise<Document>
    screenShot?: () => Promise<string>
    onload?: (img: HTMLImageElement) => void
    onerror?: (e) => void
    HEIGHT?: number
    onClick?: (e: MouseEvent, data, node: Element) => void
    onInput?: (value: string, data, node: Element) => void
    onSwipe?: (from: MouseEvent, to: MouseEvent, time: number) => void
    columns_enabled?: string[]
    columns_checked?: string[]
}

export interface Store {
    needReload?: boolean
    doc?: Document
    width?: number
    height?: number
    src?: string
    focus?: Element
    expends?: Set<Element>
    onClick?: (e: MouseEvent, data, node: Element) => void
    onInput?: (value: string, data, node: Element) => void
    onSwipe?: (from: MouseEvent, to: MouseEvent, time: number) => void
    columns_enabled?: string[]
    columns_checked?: string[]
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