export const binTree = {
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

let result = 'key not exist';

function searchKey(tree, searchElem) {
     for (var key in tree) {
          if (typeof tree[key] === 'object') {
               searchKey(tree[key], searchElem);
               if (key === searchElem) {
                    result = 'key exist';
               }
          }
     }
     return result;
}
