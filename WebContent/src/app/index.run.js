(function() {
  'use strict';

  angular
    .module('sampleAngularapp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
