export interface Config {
    el?: HTMLElement
    loadXML?: () => Promise<Document>
    screenShot?: string
    onload?: (img) => void
    onerror?: (e) => void
    WIDTH?: number
    HEIGHT?: number
}

export interface Store {
    doc?: Document
    width?: number
    height?: number
    screenShot?: string
    focus?: Element
    expends?: Set<Element>
}
