/* globals Snoocore */
import config from 'vforreddit/config/environment';

export default window.reddit = new Snoocore({
  userAgent: 'Veronica 0.0.1 by go1dfish',
  decodeHtmlEntities: true,
  oauth: {
    type: 'implicit',
    mobile: false,
    duration: 'temporary',
    consumerKey: config.consumerKey,
    redirectUri: config.redirectUrl,
    scope: [
      //'account',
      //'creddits',
      'edit',
      //'history',
      //'modflair',
      //'modlog',
      //'modothers',
      //'modposts',
      //'modself',
      //'modwiki',
      //'mysubreddits',
      'privatemessages',
      //'report',
      //'save',
      'submit',
      'subscribe',
      'vote',
      //'wikiedit',
      //'wikiread',
      'read',
      'flair',
      'identity',
       'modconfig'
    ]
  }
});
