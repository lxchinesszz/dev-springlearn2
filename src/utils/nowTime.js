// eslint-disable-next-line no-shadow
export var FormatsEnums;
(function (FormatsEnums) {
    FormatsEnums["YMD"] = "Y-m-d";
    FormatsEnums["YMDHIS"] = "Y-m-d H:i:s";
    FormatsEnums["_YMD"] = "Y\u5E74m\u6708d\u65E5";
    FormatsEnums["_YMDHIS"] = "Y\u5E74m\u6708d\u65E5 H\u65F6i\u5206";
    FormatsEnums["TIME"] = "H:i:s";
})(FormatsEnums || (FormatsEnums = {}));
export const dateFormat = function (timestamp, formats) {
    // formats格式包括
    // 1. Y-m-d
    // 2. Y-m-d H:i:s
    // 3. Y年m月d日
    // 4. Y年m月d日 H时i分
    if (!formats) {
        formats = FormatsEnums.YMD;
    }
    const zero = function (value) {
        if (value < 10) {
            return `0${value}`;
        }
        return value;
    };
    const myDate = timestamp ? new Date(timestamp) : new Date();
    const year = myDate.getFullYear();
    const month = zero(myDate.getMonth() + 1);
    const day = zero(myDate.getDate());
    const hour = zero(myDate.getHours());
    const minite = zero(myDate.getMinutes());
    const second = zero(myDate.getSeconds());
    return formats.replace(/Y|m|d|H|i|s/gi, function (matches) {
        return {
            Y: year,
            m: month,
            d: day,
            H: hour,
            i: minite,
            s: second,
        }[matches];
    });
};
//# sourceMappingURL=nowTime.js.map