(function (scope) {

    /**
     * String input component
     * @constructor
     */
    function MusicAccidentalInputComponent () {
        this.type = 'accidental';
    }

    /**
     *
     * @type {MyScript.AbstractMusicInputComponent}
     */
    MusicAccidentalInputComponent.prototype = new scope.AbstractMusicInputComponent();

    /**
     *
     * @type {MusicAccidentalInputComponent}
     */
    MusicAccidentalInputComponent.prototype.constructor = MusicAccidentalInputComponent;

    /**
     *
     * @returns {string}
     */
    MusicAccidentalInputComponent.prototype.getValue = function () {
        return this.value;
    };

    /**
     *
     * @param {string} value
     */
    MusicAccidentalInputComponent.prototype.setValue = function (value) {
        this.value = value;
    };

    // Export
    scope.MusicAccidentalInputComponent = MusicAccidentalInputComponent;
})(MyScript);