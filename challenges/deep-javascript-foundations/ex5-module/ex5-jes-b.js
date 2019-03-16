var Helpers = {
    minWorkDescriptionLength: 5,
    maxWorkTime: 600,

    formatTime:function(time) {
        var hours = Math.floor(time / 60);
        var minutes = time % 60;
        if (hours == 0 && minutes == 0) return "";
        if (minutes < 10) minutes = '0' + minutes;
        return hours + ':' + minutes;
    },

    formatWorkDescription:function(description) {
        if (description.length > maxVisibleWorkDescriptionLength) {
            description = description.substr(0, maxVisibleWorkDescriptionLength) + '...';
        }
        return description;
    },

    validateWorkEntry:function(description, minutes) {
        if (description.length < minWorkDescriptionLength) return false;

        if (
            /^\s*$/.test(minutes) ||
            Number.isNaN(Number(minutes)) ||
            minutes < 0 ||
            minutes > maxWorkTime
        ) {
            return false;
        }

        return true;
    }
};

