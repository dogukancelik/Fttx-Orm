function selectAdd(from, to) {
    var from = $("select[name='" + from + "']");
    var to = $("select[name='" + to + "']");

    if (from.val().length > 0) {
        from.children("option:selected").each(function () {
            if (!$(this).is("[hidden=hidden]")) {
                $(this).attr("hidden", "hidden");
                var text = $(this).text();
                var val = $(this).val();
                to.append("<option selected=\"selected\" value='" + val +"'>" + text + "</option>");
            }
        });
    }
    if (to.children().length > 0) {
        $("#btnGroup").css("display", "block");
    }
    else {
        $("#btnGroup").css("display", "none");
    }
}

function selectRemove(from, to) {
    var from = $("select[name='" + from + "']");
    var to = $("select[name='" + to + "']");

    to.children("option:selected").each(function () {
        var f = $("option[value='" + $(this).val() + "']");
        from.find(f).removeAttr("hidden");
        $(this).remove();
    });

    if (to.children().length > 0) {
        $("#btnGroup").css("display", "block");
    }
    else {
        $("#btnGroup").css("display", "none");
    }
}

function selectSave(to) {
    var to = $("select[name='" + to + "']");
    var out = "";
    to.children().each(function () {
        out += "-" + $(this).val();
    });
    out = out.substring(1, out.length);
    alert(out);
}