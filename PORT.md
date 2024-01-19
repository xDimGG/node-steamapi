# Progress on porting from JS to TS

| Method                  | Ported | Tested | Params changed                          | Return value changed |
| - | :-: | :-: | :-: | :-: |
| get()                   | y      | y      | base -> params, key -> base                    | n                                         |
| resolve()               | y      | y      | n                                              | n                                         |
| getFeaturedCategories() | y      | y      | accepts { language, currency }                 | n                                         |
| getFeaturedGames()      | y      | y      | accepts { language, currency }                 | returns array if app is array             |
| getGameDetails()        | y      | y      | accepts { language, currency, filters }        | n                                         |
| getAppList()            | y      | y      | n                                              | new fields added                          |
| getServers()            | y      | y      | n                                              | n                                         |
| getGamePlayers()        | y      | y      | n                                              | n                                         |
| getGameSchema()         | y      | y      | accepts language as 2nd param                  | n                                         |
| getUserAchievements()   | y      | y      | accepts language as 3rd param                  | PlayerAchievements->UserAchievements      |
| getGameAchievements()   | getGameAchievementPercentages() | y      | n                     | returns array of objects                  |
| getUserStats()          | y      | y      | n                                              | UserStats fields have changed             |
| getGameNews()           | y      | y      | GetNewsOptions passed as second parameter      | returns array of NewsPost objects         |
| getUserBadges()         | y      | y      | n                                              | changed field names in returned class     |
| getUserLevel()          | y      | y      | n                                              | n                                         |
| getUserOwnedGames()     | y      | y      | 2nd param changed from bool to opts object     | more fields added                         |
| getUserRecentGames()    | y      | y      | n                                              | fields renamed                            |
| getUserBans()           | y      | y      | n                                              | super() passes the correct steamID now    |
| getUserFriends()        | y      | y      | n                                              | fields renamed                            |
| getUserGroups()         | y      | y      | n                                              | n                                         |
| getUserServers()        | y      | y      | removed all params                             | fields added and renamed                  |
| getUserSummary()        | y      | y      | n                                              | some fields renamed                       |
