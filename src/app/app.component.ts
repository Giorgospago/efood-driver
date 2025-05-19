import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import * as heroicons from '@ng-icons/heroicons/outline';
import { Socket } from 'ngx-socket-io';
import {SafeArea} from '@capacitor-community/safe-area';
import { StatusBar } from '@capacitor/status-bar';
import { setBackForwardNavigationGestures } from "capacitor-plugin-ios-webview-configurator";
setBackForwardNavigationGestures(true);

StatusBar.setOverlaysWebView({ overlay: true });

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [
    provideIcons(heroicons)
  ],
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    SafeArea.enable({
      config: {
      }
    });
  }
}
