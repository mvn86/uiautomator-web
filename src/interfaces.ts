export interface Config {
    el?: HTMLElement
    loadXML?: () => Promise<Document>
    screenShot?: string
    onload?: (img) => void
    onerror?: (e) => void
    HEIGHT?: number
}

export interface Store {
    needReload?: boolean
    doc?: Document
    width?: number
    height?: number
    screenShot?: string
    focus?: Element
    expends?: Set<Element>
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