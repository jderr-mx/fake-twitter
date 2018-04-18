import Controller from '@ember/controller';
import { get, set } from '@ember/object';

export default Controller.extend({
  tweetHandle: null,
  tweetText: null,
  actions: {
    cancelTweet() {
      this.resetForm();
    },

    deleteTweet(tweet) {
      tweet.destroyRecord();
    },

    saveTweet() {
      let handle = get(this, 'tweetHandle');
      let text = get(this, 'tweetText');
      if (handle && text) {
        let tweet = this.store.createRecord('tweet', {
          handle,
          text
        });
        tweet.save();
        this.resetForm();
      }
    }
  },
  resetForm() {
    set(this, 'tweetHandle', null);
    set(this, 'tweetText', null);
  }
});
