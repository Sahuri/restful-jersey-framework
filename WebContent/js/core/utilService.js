(function () {
    'use strict';
    //factory service utility
    angular.module('app.services')
    .factory('utilService', utilService);
    utilService.$inject = ['numeral', '$sce'];
    function utilService(numeral, $sce) {
        numeral.language('fr', {
            delimiters: {
                thousands: '.',
                decimal: ','
            },
            abbreviations: {
                thousand: 'k',
                million: 'm',
                billion: 'b',
                trillion: 't'
            },
            ordinal: function (number) {
                return number === 1 ? 'er' : 'ème';
            },
            currency: {
                symbol: '€'
            }
        });
        numeral.language('en');

        var service = {
            digitNumber: formatDigitNumber,
            renderHtml: renderHtml,
            formatOrdinalNumber: formatOrdinalNumber

        };
        return service;

        function formatDigitNumber(val) {
            return numeral(val).format('0,0');
        }
        function renderHtml(content) {
            return $sce.trustAsHtml(content);
        }

        function formatOrdinalNumber(val) {
            return numeral(val).format('0o');
        }
    };

})();