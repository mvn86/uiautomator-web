export interface Config {
    el?: HTMLElement
    loadXML?: Promise<Document>
    screenShot?: Promise<string>
    onload?: (img: HTMLImageElement) => void
    onerror?: (e) => void
    HEIGHT?: number
    onClick?: (e: MouseEvent, node: Element) => void
    onInput?: (value: string, node: Element) => void
}

export interface Store {
    needReload?: boolean
    doc?: Document
    width?: number
    height?: number
    screenShot?: Promise<string>
    focus?: Element
    expends?: Set<Element>
    onClick?: (e: MouseEvent, node: Element) => void
    onInput?: (value: string, node: Element) => void
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