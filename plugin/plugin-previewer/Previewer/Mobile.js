import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef, useState } from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import { QRCodeSVG } from 'qrcode.react';
import styles from './styles.module.css';
import './styles.css';
function ReloadSvg(props) {
    return /*#__PURE__*/ _jsx("svg", _object_spread_props(_object_spread({
        width: "20px",
        height: "20px",
        viewBox: "0 0 16 16"
    }, props), {
        children: /*#__PURE__*/ _jsxs("g", {
            fill: "currentColor",
            children: [
                /*#__PURE__*/ _jsx("path", {
                    d: "M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
                }),
                /*#__PURE__*/ _jsx("path", {
                    fillRule: "evenodd",
                    d: "M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182a.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                })
            ]
        })
    }));
}
function FullScreenSvg(props) {
    return /*#__PURE__*/ _jsx("svg", _object_spread_props(_object_spread({
        width: "15px",
        height: "15px",
        viewBox: "0 0 16 16"
    }, props), {
        children: /*#__PURE__*/ _jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"
        })
    }));
}
function QrCodeSvg(props) {
    return /*#__PURE__*/ _jsxs("svg", _object_spread_props(_object_spread({
        width: "20px",
        height: "20px",
        viewBox: "0 0 1024 1024"
    }, props), {
        version: "1.1",
        xmlns: "https://www.w3.org/2000/svg",
        "p-id": "2552",
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M468 128H160c-17.7 0-32 14.3-32 32v308c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8z m-56 284H192V192h220v220z",
                "p-id": "2553",
                fill: "#666666"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M274 338h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM468 548H136c-4.4 0-8 3.6-8 8v308c0 17.7 14.3 32 32 32h308c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8z m-56 284H192V612h220v220z",
                "p-id": "2554",
                fill: "#666666"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M274 758h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM864 128H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V160c0-17.7-14.3-32-32-32z m-32 284H612V192h220v220z",
                "p-id": "2555",
                fill: "#666666"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M694 338h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM888 548h-48c-4.4 0-8 3.6-8 8v134h-78V556c0-4.4-3.6-8-8-8H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h78v102c0 4.4 3.6 8 8 8h190c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8z",
                "p-id": "2556",
                fill: "#666666"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M746 832h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM888 832h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z",
                "p-id": "2557",
                fill: "#666666"
            })
        ]
    }));
}
function MobilePreview({ code , url  }) {
    const iframe = useRef(null);
    const [showDialog, setShowDialog] = useState(false);
    const redirctFullScreen = ()=>{
        window.open(url);
    };
    const reloadIframe = ()=>{
        var _iframe_current;
        iframe === null || iframe === void 0 ? void 0 : (_iframe_current = iframe.current) === null || _iframe_current === void 0 ? void 0 : _iframe_current.contentWindow.location.reload();
    };
    const openQRCode = ()=>{
        setShowDialog(true);
    };
    const closeQrCode = ()=>{
        setShowDialog(false);
    };
    return /*#__PURE__*/ _jsxs("div", {
        className: `${styles.mobileWrapper} mobile-previewer`,
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: styles.mobileCodeWrapper,
                children: /*#__PURE__*/ _jsx(CodeBlock, {
                    children: code,
                    className: "language-jsx",
                    mdxType: "code",
                    originalType: "code",
                    parentName: "pre"
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: styles.mobilePreviewArea,
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: styles.mobileOperations,
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: styles.operationItem,
                                onClick: reloadIframe,
                                children: [
                                    /*#__PURE__*/ _jsx(ReloadSvg, {}),
                                    " \xa0刷新"
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: styles.operationItem,
                                onClick: redirctFullScreen,
                                children: [
                                    /*#__PURE__*/ _jsx(FullScreenSvg, {}),
                                    "  \xa0全屏模式"
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: styles.operationItem,
                                onClick: openQRCode,
                                children: [
                                    /*#__PURE__*/ _jsx(QrCodeSvg, {}),
                                    " \xa0二维码"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: styles.iframeWrapper,
                        children: [
                            /*#__PURE__*/ _jsx("iframe", {
                                ref: iframe,
                                style: {
                                    width: '325px',
                                    height: '600px',
                                    backgroundColor: '#FFF'
                                },
                                scrolling: "yes",
                                frameBorder: "0",
                                src: url
                            }),
                            showDialog && /*#__PURE__*/ _jsx("div", {
                                className: styles.dialog,
                                onClick: closeQrCode,
                                children: /*#__PURE__*/ _jsx(QRCodeSVG, {
                                    value: `${location.origin}${url}`,
                                    size: 100
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
export default MobilePreview;
