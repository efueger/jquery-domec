/**
 * jQuery DOMEC (DOM Elements Creator) 1.1.0
 * http://code.google.com/p/jquery-domec
 *
 * Copyright (c) 2008-2009 Lukasz Rajchel (lukasz@rajchel.pl | http://lukasz.rajchel.pl)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Documentation    :    http://code.google.com/p/jquery-domec/wiki/Documentation
 * Changelog        :    http://code.google.com/p/jquery-domec/wiki/Changelog
 */

/*jslint white: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, 
bitwise: true, regexp: true, strict: true, newcap: true, immed: true, maxerr: 50, indent: 4 */
/*global document, jQuery*/
/*members DOMEC, addAttributes, addChildren, addEventHandlers, addLiveEventHandlers, append, attr, 
bind, create, createElement, each, extend, isArray, length, live, text, toString*/
'use strict';
(function ($) {

    // DOMEC Core class
    $.DOMEC = (function () {
        // variables declaration
        // DOM element
        var Element = (function () {
            return {
                // create element
                create: function (name, root) {
                    // set default root if undefined
                    if (root === undefined || root === null) {
                        root = document;
                    }

                    if (typeof root === 'object' && !$.isArray(root) && 
                        typeof name === 'string') {
                        return $(root.createElement(name));
                    }

                    return undefined;
                },
                
                // add attributes
                addAttributes: function (elem, attr) {
                    if (typeof attr === 'object' && attr !== null && !$.isArray(attr)) {
                        $.each(attr, function (key, val) {
                            if (typeof val === 'string' || typeof val === 'number') {
                                elem.attr(key, val);
                            }
                        });
                    }
                },
                
                // add event handlers
                addEventHandlers: function (elem, events) {
                    if (typeof events === 'object' && events !== null && !$.isArray(events)) {
                        $.each(events, function (key, val) {
                            if (typeof key === 'string' && typeof val === 'function') {
                                elem.bind(key, val);
                            }
                        });
                    }
                },
                
                // add child elements
                addChildren: function (elem, children) {
                    if (children !== undefined && children !== null) {
                        if ($.isArray(children)) {
                            $.each(children, function (i, value) {
                                elem.append(value);
                            });
                        } else if (children instanceof jQuery) {
                            elem.append(children);
                        } else {
                            elem.text(children.toString());
                        }
                    }
                }
            };
        }());

        // DOMEC public members
        return {
            create: function (name, attributes, events, children, root) {
                var elem = Element.create(name, root);

                if (elem !== undefined) {
                    Element.addAttributes(elem, attributes);
                    Element.addEventHandlers(elem, events);
                    Element.addChildren(elem, children);
                }

                return elem;
            }
        };
    }());

    // register jQuery extension
    $.extend({
        create: $.DOMEC.create
    });

}(jQuery));