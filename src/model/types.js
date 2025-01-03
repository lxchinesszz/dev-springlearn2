export var ReleaseVersionType;
(function (ReleaseVersionType) {
    // bug修复
    ReleaseVersionType[ReleaseVersionType["BUGFIX"] = 0] = "BUGFIX";
    // 新功能
    ReleaseVersionType[ReleaseVersionType["FEATURE"] = 1] = "FEATURE";
    // bug修复 & 新功能
    ReleaseVersionType[ReleaseVersionType["ALL"] = 2] = "ALL";
})(ReleaseVersionType || (ReleaseVersionType = {}));
//# sourceMappingURL=types.js.map