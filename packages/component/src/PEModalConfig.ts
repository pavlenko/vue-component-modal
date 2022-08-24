import { Component } from "vue";

export interface PEModalConfig {
    component?: string | Component,
    props?: { [key: string]: any },
    attrs?: { [key: string]: any },
    listen?: { [key: string]: Function | Function[] }
}

export interface PEModalConfig {
    slots?: { [key: string]: PEModalConfig }
}
