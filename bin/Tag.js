"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
const reflection_1 = require("reflection");
class Tag {
    static Apply(args) {
        return function (device, property) {
            reflection_1.Reflection.SetPropertyMetadata(device, property, Tag.ApplyKey, args);
        };
    }
}
exports.Tag = Tag;
Tag.ApplyKey = "Tag";
