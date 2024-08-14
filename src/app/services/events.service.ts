import { Injectable } from "@angular/core";
import { NgxPubSubService } from "@pscoped/ngx-pub-sub";
import Pusher from 'pusher-js';

@Injectable({
  providedIn: "root",
})
export class EventsService {
  latestEvent = "randomLast";
  historicalEvent = "randomHistory";
  private pusher: Pusher;
  chatChannel: any;
  subscriptions: any[] = [];

  constructor(public pubsubSvc: NgxPubSubService) {
    pubsubSvc.registerEventWithHistory(this.historicalEvent, 6);
    pubsubSvc.registerEventWithLastValue(this.latestEvent, undefined);
    const options = {
      cluster: 'ap2',
      forceTLS: true
    };

    this.pusher = new Pusher('a45efbe1a2e731b6dbfb', options);
    this.chatChannel = this.pusher.subscribe("chats-channel");
  }

  publish(key: string, data = {}) {
    this.pubsubSvc.publishEvent(key, data);
  }

  async subscribe(key: string, handler: { (): Promise<void>; (arg0: any): void; }, unsubPrior = true) {

    if (unsubPrior) {
      const item = this.subscriptions.find((x) => x.key === key);
      if (item) {
        this.unsubscribe(key);
      }
    }


    const subs = this.pubsubSvc.subscribe(key, (data) => handler(data));
    this.subscriptions.push({ key, subs });

  }

  registerPusherEvent(id: any) {
    console.log(id);

    this.chatChannel.bind("message-rec-" + id, this.chatChannelReceived.bind(this))
  }

  chatChannelReceived($event: any) {
    this.publish('message-received-via-pusher', $event);
  }


  courseChannelReceived($event: any) {
    this.publish('course-received-via-pusher', $event);
  }



  unsubscribe(key: any) {
    const item = this.subscriptions.find((x) => x.key === key);
    if (item) {
      const subs = item["subs"];
      subs.unsubscribe();

      const index = this.subscriptions.findIndex((x) => x.key === key);
      if (index > -1) {
        this.subscriptions.splice(index, 1);
      }
    }
  }
}
