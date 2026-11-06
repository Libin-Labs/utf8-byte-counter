import * as api from '@lp-labs/utf8-byte-counter';
import { utf8ByteLength } from '@lp-labs/utf8-byte-counter';
console.log(utf8ByteLength('café'));
// @ts-expect-error invalid argument must be rejected by declarations
api.utf8ByteLength(2);
