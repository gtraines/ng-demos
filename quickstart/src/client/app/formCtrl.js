/**
 * Created by graham on 8/15/17.
 */
angular.module('app', ['schemaForm'])
    .controller('formCtrl', function($scope) {
        $scope.schema = {
            type: "object",
            properties: {
                name: { type: "string", minLength: 2, title: "Name", description: "Name or alias" },
                title: {
                    type: "string",
                    enum: ['dr','jr','sir','mrs','mr','NaN','dj']
                }
            }
        };

        $scope.form = [
            "*",
            {
                type: "submit",
                title: "Save"
            }
        ];

        $scope.model = {};
    });