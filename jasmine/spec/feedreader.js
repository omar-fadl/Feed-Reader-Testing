$(function() {
  describe('RSS Feeds', function() {
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('have non-empty URL', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      });
    });

    it('have non-empty name', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      });
    });
  });

  describe('The menu', function() {
    var body = $('body');
    var menuIcon = $('.menu-icon-link');

    it('the menu element is hidden by default', function() {
      expect(body.hasClass('menu-hidden')).toBe(true);
    });

    it('the menu changes visibility when the menu icon is clicked', function() {
      menuIcon.trigger('click');
      expect(body.hasClass('menu-hidden')).toBe(false);

      menuIcon.trigger('click');
      expect(body.hasClass('menu-hidden')).toBe(true);
    });
  });

  describe('Initial Entries', function() {
    beforeEach(function(done) {
      loadFeed(0, done);
    });

    it('at least one post after loadFeed done', function() {
      var entriesCount = $('.feed .entry').length;

      expect(entriesCount).toBeDefined();
      expect(entriesCount).toBeGreaterThan(0);
    });
  });

  describe('Initial Entries', function() {
    var content;
    var anotherContent;

    beforeEach(function(done) {
      loadFeed(1, function() {
        content = $('.feed').text();

        loadFeed(2, function() {
          anotherContent = $('.feed').text();

          done();
        });
      });
    });

    it('content actually changes when we load other feed', function() {
      expect(content).not.toEqual(anotherContent);
    });
  });
}());
