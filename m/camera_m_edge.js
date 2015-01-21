/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='../images/',
        aud='../media/',
        vid='../media/',
        js='../js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Group',
                            type: 'group',
                            rect: ['50%', '30%', '0%', '0%', 'auto', 'auto'],
                            c: [
                            {
                                id: 'camera_body',
                                type: 'rect',
                                rect: ['-120px', '-530px', '240px', '240px', 'auto', 'auto'],
                                borderRadius: ["45px", "45px", "45px", "45px 45px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                boxShadow: ["", 23, 16, 16, 0, "rgba(0,0,0,0.46)"],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                                c: [
                                {
                                    id: 'main_circle',
                                    symbolName: 'main_circle',
                                    type: 'rect',
                                    rect: ['40px', '-511px', '160', '160', 'auto', 'auto']
                                },
                                {
                                    id: 'circles',
                                    symbolName: 'circles',
                                    type: 'rect',
                                    rect: ['54px', '-498px', '133', '133', 'auto', 'auto']
                                },
                                {
                                    id: 'lence',
                                    symbolName: 'lence',
                                    type: 'rect',
                                    rect: ['80px', '-472px', '82', '82', 'auto', 'auto'],
                                    transform: [[],['-360']]
                                }]
                            }]
                        },
                        {
                            id: 'photos',
                            type: 'group',
                            rect: ['21.9%', '92px', '485px', '437px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'photo_paper0',
                                type: 'rect',
                                rect: ['-166.3%', '59%', '60%', '83.3%', 'auto', 'auto'],
                                overflow: 'visible',
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                boxShadow: ["", 7, 3, 16, 8, "rgba(0,0,0,0.62)"],
                                transform: [[],['-2']],
                                c: [
                                {
                                    id: 'photo0',
                                    type: 'image',
                                    tag: 'img',
                                    rect: ['6.9%', '5.5%', '85.9%', '68.7%', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"black-wallpaper-2.jpg",'0px','0px']
                                }]
                            },
                            {
                                id: 'photo_paper1',
                                type: 'rect',
                                rect: ['229%', '74.4%', '291px', '364px', 'auto', 'auto'],
                                overflow: 'visible',
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                boxShadow: ["", 7, 3, 16, 8, "rgba(0,0,0,0.62)"],
                                transform: [[],['9']],
                                c: [
                                {
                                    id: 'photo1',
                                    type: 'image',
                                    tag: 'img',
                                    rect: ['6.8%', '5.5%', '85.9%', '68.7%', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"black-wallpaper-2.jpg",'0px','0px']
                                }]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '768px', '744px', 'auto', 'auto'],
                            sizeRange: ['480px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(62,30,99,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 3304,
                    autoPlay: true,
                    labels: {
                        "page_start": 0,
                        "photoIn": 2500
                    },
                    data: [
                        [
                            "eid17",
                            "rotateZ",
                            1100,
                            650,
                            "swing",
                            "${lence}",
                            '-360deg',
                            '0deg'
                        ],
                        [
                            "eid11",
                            "top",
                            0,
                            500,
                            "easeInOutBack",
                            "${camera_body}",
                            '-530px',
                            '0px'
                        ],
                        [
                            "eid79",
                            "height",
                            0,
                            0,
                            "swing",
                            "${photo_paper1}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid35",
                            "left",
                            98,
                            0,
                            "easeInOutBack",
                            "${main_circle}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid71",
                            "height",
                            0,
                            0,
                            "swing",
                            "${photo_paper0}",
                            '83.3%',
                            '83.3%'
                        ],
                        [
                            "eid33",
                            "left",
                            98,
                            0,
                            "easeInOutBack",
                            "${lence}",
                            '80px',
                            '80px'
                        ],
                        [
                            "eid69",
                            "left",
                            0,
                            2500,
                            "swing",
                            "${photo_paper0}",
                            '-166.35%',
                            '-168.45%'
                        ],
                        [
                            "eid48",
                            "left",
                            2500,
                            459,
                            "swing",
                            "${photo_paper0}",
                            '-168.45%',
                            '1.1%'
                        ],
                        [
                            "eid75",
                            "top",
                            0,
                            2845,
                            "swing",
                            "${photo_paper1}",
                            '74.36%',
                            '74.81%'
                        ],
                        [
                            "eid66",
                            "top",
                            2845,
                            459,
                            "swing",
                            "${photo_paper1}",
                            '74.81%',
                            '20.6%'
                        ],
                        [
                            "eid76",
                            "left",
                            0,
                            2845,
                            "swing",
                            "${photo_paper1}",
                            '228.96%',
                            '229.48%'
                        ],
                        [
                            "eid64",
                            "left",
                            2845,
                            459,
                            "swing",
                            "${photo_paper1}",
                            '229.48%',
                            '29.1%'
                        ],
                        [
                            "eid68",
                            "top",
                            0,
                            2500,
                            "swing",
                            "${photo_paper0}",
                            '58.99%',
                            '59.09%'
                        ],
                        [
                            "eid50",
                            "top",
                            2500,
                            459,
                            "swing",
                            "${photo_paper0}",
                            '59.09%',
                            '1.2%'
                        ],
                        [
                            "eid13",
                            "top",
                            98,
                            502,
                            "easeInOutBack",
                            "${main_circle}",
                            '-511px',
                            '40px'
                        ],
                        [
                            "eid34",
                            "top",
                            98,
                            402,
                            "easeInOutBack",
                            "${lence}",
                            '-472px',
                            '-292px'
                        ],
                        [
                            "eid15",
                            "top",
                            500,
                            500,
                            "easeInOutBack",
                            "${lence}",
                            '-292px',
                            '79px'
                        ],
                        [
                            "eid37",
                            "top",
                            98,
                            152,
                            "easeInOutBack",
                            "${circles}",
                            '-498px',
                            '-318px'
                        ],
                        [
                            "eid14",
                            "top",
                            250,
                            508,
                            "easeInOutBack",
                            "${circles}",
                            '-318px',
                            '53px'
                        ],
                        [
                            "eid21",
                            "boxShadow.color",
                            1393,
                            607,
                            "easeInOutBack",
                            "${camera_body}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.46)'
                        ],
                        [
                            "eid24",
                            "boxShadow.offsetH",
                            1393,
                            607,
                            "easeInOutBack",
                            "${camera_body}",
                            '0px',
                            '23px'
                        ],
                        [
                            "eid36",
                            "left",
                            98,
                            0,
                            "easeInOutBack",
                            "${circles}",
                            '54px',
                            '54px'
                        ],
                        [
                            "eid73",
                            "width",
                            0,
                            0,
                            "swing",
                            "${photo_paper0}",
                            '60.02%',
                            '60.02%'
                        ],
                        [
                            "eid26",
                            "boxShadow.offsetV",
                            1393,
                            607,
                            "easeInOutBack",
                            "${camera_body}",
                            '0px',
                            '16px'
                        ],
                        [
                            "eid28",
                            "boxShadow.blur",
                            1393,
                            607,
                            "easeInOutBack",
                            "${camera_body}",
                            '0px',
                            '16px'
                        ],
                        [
                            "eid78",
                            "width",
                            0,
                            0,
                            "swing",
                            "${photo_paper1}",
                            '291px',
                            '291px'
                        ],
                        [
                            "eid41",
                            "filter.blur",
                            3075,
                            0,
                            "easeInOutBack",
                            "${camera_body}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "main_circle": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '144px', '144px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle_base',
                            stroke: [8, 'rgba(168,168,168,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(47,47,47,1.00)']
                        },
                        {
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['7px', '6px', '131px', '131px', 'auto', 'auto'],
                            id: 'dash_bg',
                            stroke: [8, 'rgba(85,85,85,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(47,47,47,0.00)']
                        },
                        {
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['7px', '6px', '131px', '131px', 'auto', 'auto'],
                            id: 'dash',
                            stroke: [8, 'rgba(0,0,0,1.00)', 'dotted'],
                            type: 'ellipse',
                            fill: ['rgba(47,47,47,0.00)']
                        },
                        {
                            rect: ['0px', '0px', '144px', '144px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle_outline',
                            stroke: [8, 'rgba(168,168,168,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(47,47,47,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '160px', '160px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "circles": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['0px', '0px', '131px', '131px', 'auto', 'auto'],
                            id: 'dash_bg',
                            stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(47,47,47,0.00)']
                        },
                        {
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['2px', '2px', '127px', '127px', 'auto', 'auto'],
                            id: 'dash_bgCopy10',
                            stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(47,47,47,0.00)']
                        },
                        {
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['4px', '4px', '123px', '123px', 'auto', 'auto'],
                            id: 'dash_bgCopy',
                            stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(47,47,47,0.00)']
                        },
                        {
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['6px', '6px', '119px', '119px', 'auto', 'auto'],
                            id: 'dash_bgCopy3',
                            stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(47,47,47,0.00)']
                        },
                        {
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['8px', '8px', '115px', '115px', 'auto', 'auto'],
                            id: 'dash_bgCopy4',
                            stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(47,47,47,0.00)']
                        },
                        {
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['10px', '10px', '111px', '111px', 'auto', 'auto'],
                            id: 'dash_bgCopy5',
                            stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(47,47,47,0.00)']
                        },
                        {
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['14px', '14px', '104px', '104px', 'auto', 'auto'],
                            id: 'dash_bgCopy9',
                            stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(47,47,47,0.00)']
                        },
                        {
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['17px', '17px', '98px', '98px', 'auto', 'auto'],
                            id: 'dash_bgCopy8',
                            stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(47,47,47,0.00)']
                        },
                        {
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['20px', '20px', '92px', '92px', 'auto', 'auto'],
                            id: 'dash_bgCopy7',
                            stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(47,47,47,0.00)']
                        },
                        {
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['22px', '22px', '88px', '88px', 'auto', 'auto'],
                            id: 'dash_bgCopy6',
                            stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(47,47,47,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '133px', '133px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "lence": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '90.3%', '90.2%', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3',
                            stroke: [4, 'rgba(19,144,201,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(82,58,108,1.00)']
                        },
                        {
                            rect: ['14px', '14px', '65.9%', '65.9%', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy',
                            stroke: [4, 'rgba(19,144,201,1.00)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(47,14,86,1.00)']
                        },
                        {
                            rect: ['26px', '26px', '36.6%', '36.6%', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy2',
                            stroke: [4, 'rgba(19,144,201,1.00)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(57,167,217,1.00)']
                        },
                        {
                            rect: ['19px', '19px', '26.8%', '26.8%', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy3',
                            stroke: [4, 'rgba(19,144,201,1.00)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.38)']
                        },
                        {
                            rect: ['29px', '30px', '43.9%', '43.9%', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy4',
                            stroke: [4, 'rgba(19,144,201,1.00)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.38)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '82px', '82px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("camera_m_edgeActions.js");
})("EDGE-17128933");
