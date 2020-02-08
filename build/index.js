'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    function Slider(props) {
        var _this = _super.call(this, props) || this;
        _this.handleScroll = function (event) {
            var index = _this.state.index;
            if (event.deltaY > 0 &&
                index < _this.props.children.length - 1) {
                window.scrollTo({
                    top: (index + 1) * window.innerHeight,
                    behavior: "smooth"
                });
                _this.setState({ index: index + 1 });
            }
            else if (event.deltaY < 0 && index > 0) {
                window.scrollTo({
                    top: (index - 1) * window.innerHeight,
                    behavior: "smooth"
                });
                _this.setState({ index: index - 1 });
            }
        };
        _this.handleKeyDown = function (event) {
            var index = _this.state.index;
            if ((event.key === "ArrowDown" ||
                event.key === "PageDown") &&
                index < _this.props.children.length - 1) {
                window.scrollTo({
                    top: (index + 1) * window.innerHeight,
                    behavior: "smooth"
                });
                _this.setState({ index: index + 1 });
            }
            else if ((event.key === "ArrowUp" ||
                event.key === "PageUp") &&
                index > 0) {
                window.scrollTo({
                    top: (index - 1) * window.innerHeight,
                    behavior: "smooth"
                });
                _this.setState({ index: index - 1 });
            }
        };
        _this.componentDidMount = function () {
            window.addEventListener("mousewheel", _this.handleScroll.bind(_this));
            window.addEventListener("keydown", _this.handleKeyDown.bind(_this));
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
        _this.componentWillUnmount = function () {
            window.removeEventListener("mousewheel", _this.handleScroll.bind(_this));
            window.removeEventListener("keydown", _this.handleKeyDown.bind(_this));
        };
        _this.componentDidUpdate = function () { };
        _this.render = function () {
            return React.createElement("div", { style: { height: "100vh" } }, _this.props.children);
        };
        _this.state = {
            index: 0
        };
        return _this;
    }
    return Slider;
}(React.Component));

var Slide = /** @class */ (function (_super) {
    __extends(Slide, _super);
    function Slide() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Slide.prototype.render = function () {
        return React.createElement("div", { style: { height: "100%" } }, this.props.children);
    };
    return Slide;
}(React.Component));

exports.Slide = Slide;
exports.Slider = Slider;
//# sourceMappingURL=index.js.map
