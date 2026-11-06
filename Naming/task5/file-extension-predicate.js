module.exports = class FileExtensionPredicate {
    constructor(extensions) {
        this.extensions = extensions;
    }

    test(fileName) {
        return this.extensions.some((extension) => {
            return fileName.toLowerCase().endsWith(extension);
        });
    }
};
