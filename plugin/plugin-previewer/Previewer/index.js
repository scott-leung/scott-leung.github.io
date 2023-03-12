import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import PcPreview from './PC';
import MobilePreview from './Mobile';
const Previewer = ({ mobilePreview , children , code , url  })=>{
    const deserializedCode = (code || '').replace(/&#x60;/g, '`').replace(/&#36;/g, '$');
    if (mobilePreview) return /*#__PURE__*/ _jsx(MobilePreview, {
        code: deserializedCode,
        url: url
    });
    else return /*#__PURE__*/ _jsx(PcPreview, {
        code: deserializedCode,
        children: children
    });
};
export default Previewer;
