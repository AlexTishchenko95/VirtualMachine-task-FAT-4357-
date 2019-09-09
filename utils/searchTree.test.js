import searchKey from './searchTreeTest.js';

xdescribe('Check function searchKey()', function() {
     it('searchKey(binTree, 2) must return key exist', function() {
          binTree = {
               1: {
                    2: {
                         4: {
                              8: {},
                              9: {},
                         },
                         5: {
                              10: {},
                              11: {},
                         },
                    },
                    3: {
                         6: {
                              12: {},
                              13: {},
                         },
                         7: {
                              14: {},
                              15: {},
                         },
                    },
               },
          };
          expect(searchKey(binTree, '2')).toEqual('key exist');
     });
});
