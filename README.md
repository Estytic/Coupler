Coupler
=======

Async dependency injector! Wrote for quick injections!

## Why
The real concept behind is just a simple dependency injection which will cache, re-inject and async lazy load the desired scripts based upon the dependency mentioned at first.

## How to
Just add in your html page:

```html
<script type="text/javascript" src="/js/coupler.min.js"></script>
```

And you're ready to use it now.

```javascript
__c('jQuery', ['user-module','datepicker.min','jquery-tabs'], function() {
    // jQuery is injected and after it, array[] of 3 scripts is also and you';re ready to go.
});
```
