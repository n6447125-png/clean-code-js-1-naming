const path = require('path');
const fs = require('fs');

const PropertyUtil = require('./thirdparty/property-util');
const InvalidFileTypeError = require('./thirdparty/invalid-file-type-error');
const InvalidDirectoryException = require('./thirdparty/invalid-directory-exception');
const FileExtensionPredicate = require('./file-extension-predicate');

const IMAGE_EXTENSIONS = ['jpg', 'png'];
const DOCUMENT_EXTENSIONS = ['pdf', 'doc'];

module.exports = class FileManager {
    constructor() {
        this.basePath = PropertyUtil.loadProperty('basePath');
    }

    retrieveFile(fileName) {
        this.validateFileType(fileName);
        const directoryPath = this.basePath + path.sep;
        return path.resolve(directoryPath, fileName);
    }

    listAllImages() {
        return this.listFilesWithExtensions(this.basePath, IMAGE_EXTENSIONS);
    }

    listAllDocumentFiles() {
        return this.listFilesWithExtensions(this.basePath, DOCUMENT_EXTENSIONS);
    }

    validateFileType(fileName) {
        if (this.isInvalidFileType(fileName)) {
            throw new InvalidFileTypeError('File type not Supported: ' + fileName);
        }
    }

    isInvalidFileType(fileName) {
        return this.isInvalidImage(fileName) && this.isInvalidDocument(fileName);
    }

    isInvalidImage(fileName) {
        const imageExtensionsPredicate = new FileExtensionPredicate(IMAGE_EXTENSIONS);
        return !imageExtensionsPredicate.test(fileName);
    }

    isInvalidDocument(fileName) {
        const documentExtensionsPredicate = new FileExtensionPredicate(DOCUMENT_EXTENSIONS);
        return !documentExtensionsPredicate.test(fileName);
    }

    listFilesWithExtensions(directoryPath, allowedExtensions) {
        const extensionPredicate = new FileExtensionPredicate(allowedExtensions);
        return this.listDirectory(directoryPath).filter((fileName) => {
            return extensionPredicate.test(fileName);
        });
    }

    listDirectory(directoryPath) {
        const directoryStats = fs.statSync(directoryPath);
        this.validateDirectory(directoryStats, directoryPath);
        return fs.readdirSync(directoryPath);
    }

    validateDirectory(directoryStats, directoryPath) {
        if (this.isNotDirectory(directoryStats)) {
            throw new InvalidDirectoryException('Invalid directory found: ' + directoryPath);
        }
    }

    isNotDirectory(directoryStats) {
        return !directoryStats.isDirectory();
    }
};
