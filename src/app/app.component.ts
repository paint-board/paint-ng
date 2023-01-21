import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Route, Router} from "@angular/router";
import {Dialog} from "@angular/cdk/dialog";
import {MatDialog} from "@angular/material/dialog";
import {MessageBoxComponent} from "./message-box/message-box.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'PaintNg';
  router: Router
  constructor(title : Title, router : Router) {
    title.setTitle(this.title)
    this.router = router
    this.woW = 0
  }

  woW: number
  wow():string {
    if (this.woW > 20) {
      open("https://github.com/jellytea")
      this.woW = 0
    }
    if (this.woW > 19) {
      return "Pa?nt NG? (` > ω<´)"
    }
    if (this.woW > 10) {
      return "PaInt NG! (` • ω•´)"
    }
    return "PaintNg"
  }
}

export class Token {
  tokenString: string

  constructor(token: string) {
    this.tokenString = token;
  }

}

export class Host {
  ws: WebSocket
  constructor(hostAddr: string) {
    this.ws = new WebSocket(hostAddr)
    this.ws.onmessage = (event) => {
      let resp = new Map<string,any>()
      const msg = JSON.parse(event.data)
      if (msg.type == WebSocket) {}
    }
  }
}
