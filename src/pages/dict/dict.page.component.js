import css from './dict.page.css';

class DictPageCtrl {
	constructor($scope, DictService) {
		this.DictService = DictService;
		this.$scope = $scope;
        this.$scope.currentWord = "";
        this.load();
	    this.start();
	}

    load() {
        // this.getWordList();
        this.getDicts();
    }

    displayWordList(data) {
        $('#word-list').html("");
        $(data).each((row, rowText)=>{
            var newRow = $("<li id='word_" + rowText + "' data-word='" + rowText + "'>")
                .text(rowText)
                .click(()=>{
                    this.getWordDetail($(this).data("word"));
                });
            $('#word-list').append(newRow);
        });
    }

    getDicts(){
        this.DictService.getDictList()
        .then((response)=>{
            var data = response.data;
            this.$scope.dicts = data;
            this.$scope.currentDict = data[0];
        });
    }

    getWordList() {
        this.DictService.getWordList()
        .then((response)=>{
            var data = response.data;
            // console.log(data);
            this.displayWordList(data);
        });
    }

    getWordDetail(word) {
        this.findWord(word);
    }

    findWord(word) {
        this.DictService.findWord(word, this.$scope.currentDict.name)
        .then((response)=>{
            var data = response.data;
            // console.log(data);
            this.displayWordResult(data);
        });
    }

    displayWordResult(data) {
        $('#result-word').text(data.word);
        if (data.meaningText && data.detail) {
            $('#result-found-panel').show();
            $('#result-notfound-panel').hide();
            var main = data.detail.main;
            var categories = data.detail.categories;

            $('#result-word-meaning').empty();
            // var preContent = $("<pre style='display:none'>")
            //       .text(main.text);
            // $('#result-word-meaning').append(preContent);
            $(main.wordClasses).each(function(classIndex, classData) {
                if (classData) {
                    var newClassDiv = $("<div>");
                    var titleEl = $("<div>");
                    var contentEl = $("<div>");

                    var listEl = $("<div>");
                    $(classData.list).each(function(listIndex, listItemData) {
                        var itemEl = $("<div>");

                        var itemSubTitleEl = $("<div>");
                        itemSubTitleEl.text(listItemData.text);
                        itemEl.append(itemSubTitleEl);

                        var itemExamplesEl = $("<ul>");
                        $(listItemData.examples).each(function(exampleIndex, exampleData) {
                            var itemExampleEl = $("<li>");
                            itemExampleEl.append("<span class='phrase'>" + exampleData.phrase + "</span>: " + exampleData.text);
                            itemExamplesEl.append(itemExampleEl);
                        });
                        itemEl.append(itemExamplesEl);
                        listEl.append(itemEl);
                    });
                    contentEl.append(listEl);


                    var groupsEl = $("<div>");
                    $(classData.groups).each(function(groupIndex, groupData) {
                        var groupEl = $("<div class='word-sub-group'>");
                        var groupTitleEl = $("<div>");
                        groupTitleEl.append("<b>" + groupData.title + "</b>");
                        groupEl.append(groupTitleEl);

                        $(groupData.list).each(function(listIndex, listItemData) {
                            var itemEl = $("<div>");

                            var itemSubTitleEl = $("<div>");
                            itemSubTitleEl.text(listItemData.text);
                            itemEl.append(itemSubTitleEl);

                            var itemExamplesEl = $("<ul>");
                            $(listItemData.examples).each(function(exampleIndex, exampleData) {
                                var itemExampleEl = $("<li>");
                                itemExampleEl.append("<span class='phrase'>" + exampleData.phrase + "</span>: " + exampleData.text);
                                itemExamplesEl.append(itemExampleEl);
                            });

                            itemEl.append(itemExamplesEl);
                            groupEl.append(itemEl);
                        });
                        groupsEl.append(groupEl);
                    });
                    contentEl.append(groupsEl);

                    titleEl.append("<u>" + classData.title + "</u>");
                    newClassDiv.append(titleEl);
                    newClassDiv.append(contentEl);
                    $('#result-word-meaning').append(newClassDiv);
                }
            });

            if (data.detail.pronunciation) {
                $("#transcription").text(data.detail.pronunciation.transcription);
            } else {
                $("#transcription").text('');
            }

            // Other meanings
            $('#result-word-meaning-list').empty();
            $(categories).each(function(catIndex, catData) {
                if (catData) {
                    var newRow = $("<li id='text_" + catIndex + "'>");
                    newRow.append("<h5>" + catData.title + "</h5>");
                    // var preContent = $("<pre style='display:none'>")
                    //   .text(catData.text);
                    // newRow.append(preContent);
                    var listEl = $("<ul>");

                    $(catData.list).each(function(listIndex, listItemData) {
                        var itemEl = $("<li>");
                        itemEl.text(listItemData);
                        listEl.append(itemEl);
                    });
                    newRow.append(listEl);
                    $('#result-word-meaning-list').append(newRow);
                }
            });
        } else {
            $('#result-found-panel').hide();
            $('#result-notfound-panel').show();

        }
    }

	start() {
        // console.log('Dict start!');
	    $('#result-found-panel').hide();
	    $('#btn-search').click(() => {
	        this.findWord(this.$scope.currentWord); // $("#search-word").val()
	    });
	    $("#search-word").change(() => {
	        this.findWord(this.$scope.currentWord);
	    });
	}
}

module.exports = {
    template: require('./dict.page.component.html'),
    controller: DictPageCtrl,
    // bindings: {
    //     wordData: '='
    // }
}