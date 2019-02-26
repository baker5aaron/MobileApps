import { EventData } from 'data/observable';
import { StackLayout } from 'ui/layouts/stack-layout';
import { HomeViewModel } from './browse-view-model';

// Event handler for Page "pageLoaded" event attached in home-page.xml
export function pageLoaded(args: EventData) {
    let page = <StackLayout>args.object;
    page.bindingContext = new HomeViewModel();
}