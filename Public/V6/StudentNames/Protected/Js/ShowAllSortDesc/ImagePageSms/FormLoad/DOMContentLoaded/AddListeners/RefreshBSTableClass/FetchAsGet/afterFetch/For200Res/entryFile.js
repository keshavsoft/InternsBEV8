let StartFunc = ({ inResponseAsJson }) => {
    inResponseAsJson.reverse();

    var $table = $('#table');
    $table.bootstrapTable("load", inResponseAsJson);
};

export { StartFunc };