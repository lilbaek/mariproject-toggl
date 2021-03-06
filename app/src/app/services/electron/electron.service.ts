import {Injectable} from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import {ipcRenderer, webFrame, remote} from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';

@Injectable({
    providedIn: 'root'
})
export class ElectronService {
    public ipcRenderer: typeof ipcRenderer;
    public webFrame: typeof webFrame;
    public remote: typeof remote;
    public childProcess: typeof childProcess;
    public fs: typeof fs;

    get isElectron(): boolean {
        // @ts-ignore
        return window && window.process && window.process.type;
    }

    constructor() {
        // Conditional imports
        if (this.isElectron) {
            // @ts-ignore
            this.ipcRenderer = window.require('electron').ipcRenderer;
            // @ts-ignore
            this.webFrame = window.require('electron').webFrame;
            // @ts-ignore
            this.remote = window.require('electron').remote;
            // @ts-ignore
            this.childProcess = window.require('child_process');
            // @ts-ignore
            this.fs = window.require('fs');
        }
    }
}
