<div align="left">

[![Visit Trello](./header.png)](https://developer.atlassian.com&#x2F;cloud&#x2F;trello)

# [Trello](https://developer.atlassian.com&#x2F;cloud&#x2F;trello)<a id="trello"></a>

This document describes the REST API of Trello as published by Trello.com.
 - <a href='https://trello.com/docs/index.html' target='_blank'>Official Documentation</a>
 - <a href='https://trello.com/docs/api' target='_blank'>The HTML pages that were scraped in order to generate this specification.</a>

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`trello.action.getBoardByIdAction`](#trelloactiongetboardbyidaction)
  * [`trello.action.getBoardByIdActionByField`](#trelloactiongetboardbyidactionbyfield)
  * [`trello.action.getById`](#trelloactiongetbyid)
  * [`trello.action.getByIdActionField`](#trelloactiongetbyidactionfield)
  * [`trello.action.getCardByIdAction`](#trelloactiongetcardbyidaction)
  * [`trello.action.getCardByIdActionByField`](#trelloactiongetcardbyidactionbyfield)
  * [`trello.action.getDisplayByIdAction`](#trelloactiongetdisplaybyidaction)
  * [`trello.action.getEntitiesByIdAction`](#trelloactiongetentitiesbyidaction)
  * [`trello.action.getListByIdAction`](#trelloactiongetlistbyidaction)
  * [`trello.action.getListByIdActionByField`](#trelloactiongetlistbyidactionbyfield)
  * [`trello.action.getMemberByField`](#trelloactiongetmemberbyfield)
  * [`trello.action.getMemberByIdAction`](#trelloactiongetmemberbyidaction)
  * [`trello.action.getMemberByIdActionByField`](#trelloactiongetmemberbyidactionbyfield)
  * [`trello.action.getMemberCreatorByIdAction`](#trelloactiongetmembercreatorbyidaction)
  * [`trello.action.getOrgByIdActionByField`](#trelloactiongetorgbyidactionbyfield)
  * [`trello.action.getOrganizationByIdAction`](#trelloactiongetorganizationbyidaction)
  * [`trello.action.removeByIdAction`](#trelloactionremovebyidaction)
  * [`trello.action.updateByIdAction`](#trelloactionupdatebyidaction)
  * [`trello.action.updateTextByIdAction`](#trelloactionupdatetextbyidaction)
  * [`trello.batch.getData`](#trellobatchgetdata)
  * [`trello.board.addChecklists`](#trelloboardaddchecklists)
  * [`trello.board.addLabelsByIdBoard`](#trelloboardaddlabelsbyidboard)
  * [`trello.board.addPowerUpsByIdBoard`](#trelloboardaddpowerupsbyidboard)
  * [`trello.board.createBoard`](#trelloboardcreateboard)
  * [`trello.board.createListsByIdBoard`](#trelloboardcreatelistsbyidboard)
  * [`trello.board.filterCardsByIdBoard`](#trelloboardfiltercardsbyidboard)
  * [`trello.board.generateCalendarKeyById`](#trelloboardgeneratecalendarkeybyid)
  * [`trello.board.generateEmailKey`](#trelloboardgenerateemailkey)
  * [`trello.board.getBoardStarsById`](#trelloboardgetboardstarsbyid)
  * [`trello.board.getById`](#trelloboardgetbyid)
  * [`trello.board.getByIdField`](#trelloboardgetbyidfield)
  * [`trello.board.getCardsByIdBoard`](#trelloboardgetcardsbyidboard)
  * [`trello.board.getCardsByIdBoardByIdCard`](#trelloboardgetcardsbyidboardbyidcard)
  * [`trello.board.getChecklistsById`](#trelloboardgetchecklistsbyid)
  * [`trello.board.getDeltasByIdBoard`](#trelloboardgetdeltasbyidboard)
  * [`trello.board.getLabelsByIdBoardByIdLabel`](#trelloboardgetlabelsbyidboardbyidlabel)
  * [`trello.board.getListsByFilter`](#trelloboardgetlistsbyfilter)
  * [`trello.board.getListsByIdBoard`](#trelloboardgetlistsbyidboard)
  * [`trello.board.getMembersByFilter`](#trelloboardgetmembersbyfilter)
  * [`trello.board.getMembersByIdBoard`](#trelloboardgetmembersbyidboard)
  * [`trello.board.getMembersCardsByIdBoardByIdMember`](#trelloboardgetmemberscardsbyidboardbyidmember)
  * [`trello.board.getMembersInvitedByField`](#trelloboardgetmembersinvitedbyfield)
  * [`trello.board.getMembersInvitedByIdBoard`](#trelloboardgetmembersinvitedbyidboard)
  * [`trello.board.getMembershipsByIdBoard`](#trelloboardgetmembershipsbyidboard)
  * [`trello.board.getMembershipsByIdBoardByIdMembership`](#trelloboardgetmembershipsbyidboardbyidmembership)
  * [`trello.board.getMyPrefsById`](#trelloboardgetmyprefsbyid)
  * [`trello.board.getOrganizationById`](#trelloboardgetorganizationbyid)
  * [`trello.board.getOrganizationByIdBoardByField`](#trelloboardgetorganizationbyidboardbyfield)
  * [`trello.board.listActionsByIdBoard`](#trelloboardlistactionsbyidboard)
  * [`trello.board.listLabelsByIdBoard`](#trelloboardlistlabelsbyidboard)
  * [`trello.board.markAsViewedByIdBoard`](#trelloboardmarkasviewedbyidboard)
  * [`trello.board.removeMember`](#trelloboardremovemember)
  * [`trello.board.removePowerUp`](#trelloboardremovepowerup)
  * [`trello.board.updateById`](#trelloboardupdatebyid)
  * [`trello.board.updateClosedById`](#trelloboardupdateclosedbyid)
  * [`trello.board.updateDescriptionByIdBoard`](#trelloboardupdatedescriptionbyidboard)
  * [`trello.board.updateLabelNamesBlueById`](#trelloboardupdatelabelnamesbluebyid)
  * [`trello.board.updateLabelNamesGreenByIdBoardPut`](#trelloboardupdatelabelnamesgreenbyidboardput)
  * [`trello.board.updateLabelNamesOrangeByIdBoard`](#trelloboardupdatelabelnamesorangebyidboard)
  * [`trello.board.updateLabelNamesPurpleByIdBoard`](#trelloboardupdatelabelnamespurplebyidboard)
  * [`trello.board.updateLabelNamesRed`](#trelloboardupdatelabelnamesred)
  * [`trello.board.updateLabelNamesYellowByIdBoard`](#trelloboardupdatelabelnamesyellowbyidboard)
  * [`trello.board.updateMembersByIdBoard`](#trelloboardupdatemembersbyidboard)
  * [`trello.board.updateMembersByIdBoardByIdMember`](#trelloboardupdatemembersbyidboardbyidmember)
  * [`trello.board.updateMembershipsByIdBoardByIdMembership`](#trelloboardupdatemembershipsbyidboardbyidmembership)
  * [`trello.board.updateMyPrefsEmailListByIdBoard`](#trelloboardupdatemyprefsemaillistbyidboard)
  * [`trello.board.updateMyPrefsEmailPositionByIdBoard`](#trelloboardupdatemyprefsemailpositionbyidboard)
  * [`trello.board.updateMyPrefsShowListGuideByIdBoard`](#trelloboardupdatemyprefsshowlistguidebyidboard)
  * [`trello.board.updateMyPrefsShowSidebar`](#trelloboardupdatemyprefsshowsidebar)
  * [`trello.board.updateMyPrefsShowSidebarActionsByIdBoard`](#trelloboardupdatemyprefsshowsidebaractionsbyidboard)
  * [`trello.board.updateMyPrefsShowSidebarActivityByIdBoard`](#trelloboardupdatemyprefsshowsidebaractivitybyidboard)
  * [`trello.board.updateNameById`](#trelloboardupdatenamebyid)
  * [`trello.board.updateOrganizationByIdBoard`](#trelloboardupdateorganizationbyidboard)
  * [`trello.board.updatePrefsBackgroundByIdBoard`](#trelloboardupdateprefsbackgroundbyidboard)
  * [`trello.board.updatePrefsCalendarFeedEnabledById`](#trelloboardupdateprefscalendarfeedenabledbyid)
  * [`trello.board.updatePrefsCardAgingByIdBoard`](#trelloboardupdateprefscardagingbyidboard)
  * [`trello.board.updatePrefsCardCoversByIdBoard`](#trelloboardupdateprefscardcoversbyidboard)
  * [`trello.board.updatePrefsCommentsByIdBoard`](#trelloboardupdateprefscommentsbyidboard)
  * [`trello.board.updatePrefsInvitationsByIdBoard`](#trelloboardupdateprefsinvitationsbyidboard)
  * [`trello.board.updatePrefsPermissionLevelById`](#trelloboardupdateprefspermissionlevelbyid)
  * [`trello.board.updatePrefsSelfJoinByIdBoard`](#trelloboardupdateprefsselfjoinbyidboard)
  * [`trello.board.updatePrefsShowSidebarMembersById`](#trelloboardupdateprefsshowsidebarmembersbyid)
  * [`trello.board.updateSubscribedById`](#trelloboardupdatesubscribedbyid)
  * [`trello.board.updateVotingPrefsById`](#trelloboardupdatevotingprefsbyid)
  * [`trello.card.addActionsCommentsByIdCard`](#trellocardaddactionscommentsbyidcard)
  * [`trello.card.addAttachmentsByIdCard`](#trellocardaddattachmentsbyidcard)
  * [`trello.card.addChecklistCheckItem`](#trellocardaddchecklistcheckitem)
  * [`trello.card.addChecklists`](#trellocardaddchecklists)
  * [`trello.card.addIdLabelsToCard`](#trellocardaddidlabelstocard)
  * [`trello.card.addLabels`](#trellocardaddlabels)
  * [`trello.card.addMembers`](#trellocardaddmembers)
  * [`trello.card.addMembersVoted`](#trellocardaddmembersvoted)
  * [`trello.card.addStickersByIdCard`](#trellocardaddstickersbyidcard)
  * [`trello.card.convertCheckItemToCard`](#trellocardconvertcheckitemtocard)
  * [`trello.card.createAndUpdate`](#trellocardcreateandupdate)
  * [`trello.card.deleteAttachmentsByIdCardByIdAttachment`](#trellocarddeleteattachmentsbyidcardbyidattachment)
  * [`trello.card.deleteChecklistByIdCardByIdChecklist`](#trellocarddeletechecklistbyidcardbyidchecklist)
  * [`trello.card.getAttachmentsByIdCard`](#trellocardgetattachmentsbyidcard)
  * [`trello.card.getAttachmentsByIds`](#trellocardgetattachmentsbyids)
  * [`trello.card.getBoardById`](#trellocardgetboardbyid)
  * [`trello.card.getBoardByIdCardByField`](#trellocardgetboardbyidcardbyfield)
  * [`trello.card.getById`](#trellocardgetbyid)
  * [`trello.card.getByIdField`](#trellocardgetbyidfield)
  * [`trello.card.getCardsListByIdCardByField`](#trellocardgetcardslistbyidcardbyfield)
  * [`trello.card.getCheckItemStatesById`](#trellocardgetcheckitemstatesbyid)
  * [`trello.card.getChecklistsById`](#trellocardgetchecklistsbyid)
  * [`trello.card.getListById`](#trellocardgetlistbyid)
  * [`trello.card.getMembersVotedByIdCard`](#trellocardgetmembersvotedbyidcard)
  * [`trello.card.getStickerByIds`](#trellocardgetstickerbyids)
  * [`trello.card.getStickersByIdCard`](#trellocardgetstickersbyidcard)
  * [`trello.card.listCardActionsById`](#trellocardlistcardactionsbyid)
  * [`trello.card.listMembersByIdCard`](#trellocardlistmembersbyidcard)
  * [`trello.card.markAssociatedNotificationsRead`](#trellocardmarkassociatednotificationsread)
  * [`trello.card.removeActionCommentByIdCardByIdAction`](#trellocardremoveactioncommentbyidcardbyidaction)
  * [`trello.card.removeByIdCard`](#trellocardremovebyidcard)
  * [`trello.card.removeChecklistCheckItem`](#trellocardremovechecklistcheckitem)
  * [`trello.card.removeLabelByIdCardByIdLabel`](#trellocardremovelabelbyidcardbyidlabel)
  * [`trello.card.removeLabelsByIdCardByColor`](#trellocardremovelabelsbyidcardbycolor)
  * [`trello.card.removeMemberByIdMember`](#trellocardremovememberbyidmember)
  * [`trello.card.removeMembersVotedByIdCardByIdMember`](#trellocardremovemembersvotedbyidcardbyidmember)
  * [`trello.card.removeStickerByIds`](#trellocardremovestickerbyids)
  * [`trello.card.updateActionCommentByIdCardByIdAction`](#trellocardupdateactioncommentbyidcardbyidaction)
  * [`trello.card.updateAttachmentCoverByIdCard`](#trellocardupdateattachmentcoverbyidcard)
  * [`trello.card.updateBoardByIdCard`](#trellocardupdateboardbyidcard)
  * [`trello.card.updateByIdCard`](#trellocardupdatebyidcard)
  * [`trello.card.updateCheckItemPosById`](#trellocardupdatecheckitemposbyid)
  * [`trello.card.updateChecklistCheckItem`](#trellocardupdatechecklistcheckitem)
  * [`trello.card.updateChecklistCheckItemNameById`](#trellocardupdatechecklistcheckitemnamebyid)
  * [`trello.card.updateChecklistCheckItemState`](#trellocardupdatechecklistcheckitemstate)
  * [`trello.card.updateClosedById`](#trellocardupdateclosedbyid)
  * [`trello.card.updateDescriptionByIdCard`](#trellocardupdatedescriptionbyidcard)
  * [`trello.card.updateDueById`](#trellocardupdateduebyid)
  * [`trello.card.updateIdListByIdCard`](#trellocardupdateidlistbyidcard)
  * [`trello.card.updateIdMembers`](#trellocardupdateidmembers)
  * [`trello.card.updateLabels`](#trellocardupdatelabels)
  * [`trello.card.updateNameById`](#trellocardupdatenamebyid)
  * [`trello.card.updatePosByIdCard`](#trellocardupdateposbyidcard)
  * [`trello.card.updateStickersByIdCardByIdSticker`](#trellocardupdatestickersbyidcardbyidsticker)
  * [`trello.card.updateSubscribedByIdCard`](#trellocardupdatesubscribedbyidcard)
  * [`trello.checklist.addCheckItemsByIdChecklist`](#trellochecklistaddcheckitemsbyidchecklist)
  * [`trello.checklist.create`](#trellochecklistcreate)
  * [`trello.checklist.getBoardByIdChecklist`](#trellochecklistgetboardbyidchecklist)
  * [`trello.checklist.getBoardByIdChecklistByField`](#trellochecklistgetboardbyidchecklistbyfield)
  * [`trello.checklist.getById`](#trellochecklistgetbyid)
  * [`trello.checklist.getByIdField`](#trellochecklistgetbyidfield)
  * [`trello.checklist.getCardsByFilter`](#trellochecklistgetcardsbyfilter)
  * [`trello.checklist.getCheckItemsByIdChecklist`](#trellochecklistgetcheckitemsbyidchecklist)
  * [`trello.checklist.getCheckItemsByIdChecklistByIdCheckItem`](#trellochecklistgetcheckitemsbyidchecklistbyidcheckitem)
  * [`trello.checklist.listCardsByIdChecklist`](#trellochecklistlistcardsbyidchecklist)
  * [`trello.checklist.removeById`](#trellochecklistremovebyid)
  * [`trello.checklist.removeByIdCheckItem`](#trellochecklistremovebyidcheckitem)
  * [`trello.checklist.updateByIdChecklist`](#trellochecklistupdatebyidchecklist)
  * [`trello.checklist.updateIdCardByIdChecklist`](#trellochecklistupdateidcardbyidchecklist)
  * [`trello.checklist.updateNameByIdChecklist`](#trellochecklistupdatenamebyidchecklist)
  * [`trello.checklist.updatePosByIdChecklist`](#trellochecklistupdateposbyidchecklist)
  * [`trello.label.createLabels`](#trellolabelcreatelabels)
  * [`trello.label.getBoardByIdLabel`](#trellolabelgetboardbyidlabel)
  * [`trello.label.getBoardByIdLabelByField`](#trellolabelgetboardbyidlabelbyfield)
  * [`trello.label.getByIdLabel`](#trellolabelgetbyidlabel)
  * [`trello.label.removeByIdLabel`](#trellolabelremovebyidlabel)
  * [`trello.label.updateByIdLabel`](#trellolabelupdatebyidlabel)
  * [`trello.label.updateColorByIdLabel`](#trellolabelupdatecolorbyidlabel)
  * [`trello.label.updateNameByIdLabel`](#trellolabelupdatenamebyidlabel)
  * [`trello.list.archiveAllCardsByIdList`](#trellolistarchiveallcardsbyidlist)
  * [`trello.list.createCardsByIdList`](#trellolistcreatecardsbyidlist)
  * [`trello.list.createList`](#trellolistcreatelist)
  * [`trello.list.getActionsByIdList`](#trellolistgetactionsbyidlist)
  * [`trello.list.getBoardByIdListByField`](#trellolistgetboardbyidlistbyfield)
  * [`trello.list.getByIdList`](#trellolistgetbyidlist)
  * [`trello.list.getByIdListByField`](#trellolistgetbyidlistbyfield)
  * [`trello.list.getCardsByFilter`](#trellolistgetcardsbyfilter)
  * [`trello.list.getCardsByIdList`](#trellolistgetcardsbyidlist)
  * [`trello.list.idBoardGet`](#trellolistidboardget)
  * [`trello.list.moveAllCardsByIdList`](#trellolistmoveallcardsbyidlist)
  * [`trello.list.updateByIdList`](#trellolistupdatebyidlist)
  * [`trello.list.updateClosedByIdList`](#trellolistupdateclosedbyidlist)
  * [`trello.list.updateIdBoardByIdList`](#trellolistupdateidboardbyidlist)
  * [`trello.list.updateNameByIdList`](#trellolistupdatenamebyidlist)
  * [`trello.list.updatePosByIdList`](#trellolistupdateposbyidlist)
  * [`trello.list.updateSubscribedByIdList`](#trellolistupdatesubscribedbyidlist)
  * [`trello.member.addBoardBackgrounds`](#trellomemberaddboardbackgrounds)
  * [`trello.member.addBoardStarsByIdMember`](#trellomemberaddboardstarsbyidmember)
  * [`trello.member.addCustomBoardBackgrounds`](#trellomemberaddcustomboardbackgrounds)
  * [`trello.member.addCustomEmojiByIdMember`](#trellomemberaddcustomemojibyidmember)
  * [`trello.member.addCustomStickers`](#trellomemberaddcustomstickers)
  * [`trello.member.addOneTimeMessagesDismissedByIdMember`](#trellomemberaddonetimemessagesdismissedbyidmember)
  * [`trello.member.createSavedSearch`](#trellomembercreatesavedsearch)
  * [`trello.member.deleteBoardBackground`](#trellomemberdeleteboardbackground)
  * [`trello.member.getBoardBackgroundByIds`](#trellomembergetboardbackgroundbyids)
  * [`trello.member.getBoardBackgroundsById`](#trellomembergetboardbackgroundsbyid)
  * [`trello.member.getBoardStarByIdMember`](#trellomembergetboardstarbyidmember)
  * [`trello.member.getBoardStarsById`](#trellomembergetboardstarsbyid)
  * [`trello.member.getBoards`](#trellomembergetboards)
  * [`trello.member.getBoardsByIdMember`](#trellomembergetboardsbyidmember)
  * [`trello.member.getBoardsInvitedByIdMemberByField`](#trellomembergetboardsinvitedbyidmemberbyfield)
  * [`trello.member.getByField`](#trellomembergetbyfield)
  * [`trello.member.getById`](#trellomembergetbyid)
  * [`trello.member.getCardsByFilter`](#trellomembergetcardsbyfilter)
  * [`trello.member.getCardsByIdMember`](#trellomembergetcardsbyidmember)
  * [`trello.member.getCustomBoardBackgroundByIds`](#trellomembergetcustomboardbackgroundbyids)
  * [`trello.member.getCustomBoardBackgroundsById`](#trellomembergetcustomboardbackgroundsbyid)
  * [`trello.member.getCustomEmojiByIds`](#trellomembergetcustomemojibyids)
  * [`trello.member.getCustomStickerByIds`](#trellomembergetcustomstickerbyids)
  * [`trello.member.getCustomStickersByIdMember`](#trellomembergetcustomstickersbyidmember)
  * [`trello.member.getDeltasByIdMember`](#trellomembergetdeltasbyidmember)
  * [`trello.member.getInvitedBoards`](#trellomembergetinvitedboards)
  * [`trello.member.getNotificationsByIdMember`](#trellomembergetnotificationsbyidmember)
  * [`trello.member.getNotificationsByIdMemberByFilter`](#trellomembergetnotificationsbyidmemberbyfilter)
  * [`trello.member.getOrganizations`](#trellomembergetorganizations)
  * [`trello.member.getSavedSearchByIds`](#trellomembergetsavedsearchbyids)
  * [`trello.member.getSavedSearchesByIdMember`](#trellomembergetsavedsearchesbyidmember)
  * [`trello.member.getTokensByIdMember`](#trellomembergettokensbyidmember)
  * [`trello.member.listActionsByIdMember`](#trellomemberlistactionsbyidmember)
  * [`trello.member.listCustomEmojiByIdMember`](#trellomemberlistcustomemojibyidmember)
  * [`trello.member.listInvitedOrganizationsById`](#trellomemberlistinvitedorganizationsbyid)
  * [`trello.member.listOrganizationsById`](#trellomemberlistorganizationsbyid)
  * [`trello.member.listOrganizationsInvitedByIdMemberByField`](#trellomemberlistorganizationsinvitedbyidmemberbyfield)
  * [`trello.member.removeBoardStarByIdMemberByIdBoardStar`](#trellomemberremoveboardstarbyidmemberbyidboardstar)
  * [`trello.member.removeCustomBoardBackgroundById`](#trellomemberremovecustomboardbackgroundbyid)
  * [`trello.member.removeCustomStickerByIds`](#trellomemberremovecustomstickerbyids)
  * [`trello.member.removeSavedSearchByIds`](#trellomemberremovesavedsearchbyids)
  * [`trello.member.updateAvatarSource`](#trellomemberupdateavatarsource)
  * [`trello.member.updateBioById`](#trellomemberupdatebiobyid)
  * [`trello.member.updateBoardBackgroundsById`](#trellomemberupdateboardbackgroundsbyid)
  * [`trello.member.updateBoardStar`](#trellomemberupdateboardstar)
  * [`trello.member.updateBoardStarPosByIdMemberByIdBoardStar`](#trellomemberupdateboardstarposbyidmemberbyidboardstar)
  * [`trello.member.updateBoardStarsIdBoard`](#trellomemberupdateboardstarsidboard)
  * [`trello.member.updateByIdMember`](#trellomemberupdatebyidmember)
  * [`trello.member.updateCustomBoardBackgrounds`](#trellomemberupdatecustomboardbackgrounds)
  * [`trello.member.updateFullName`](#trellomemberupdatefullname)
  * [`trello.member.updateInitialsByIdMember`](#trellomemberupdateinitialsbyidmember)
  * [`trello.member.updatePrefsColorBlindByIdMember`](#trellomemberupdateprefscolorblindbyidmember)
  * [`trello.member.updatePrefsLocaleByIdMember`](#trellomemberupdateprefslocalebyidmember)
  * [`trello.member.updatePrefsMinutesBetweenSummariesById`](#trellomemberupdateprefsminutesbetweensummariesbyid)
  * [`trello.member.updateSavedSearchQueryByIdMemberByIdSavedSearch`](#trellomemberupdatesavedsearchquerybyidmemberbyidsavedsearch)
  * [`trello.member.updateSavedSearchesByIdMemberByIdSavedSearch`](#trellomemberupdatesavedsearchesbyidmemberbyidsavedsearch)
  * [`trello.member.updateSavedSearchesNameByIdMemberByIdSavedSearch`](#trellomemberupdatesavedsearchesnamebyidmemberbyidsavedsearch)
  * [`trello.member.updateSavedSearchesPosByIdMemberByIdSavedSearch`](#trellomemberupdatesavedsearchesposbyidmemberbyidsavedsearch)
  * [`trello.member.updateUsernameById`](#trellomemberupdateusernamebyid)
  * [`trello.member.uploadAvatarById`](#trellomemberuploadavatarbyid)
  * [`trello.notification.getBoardByField`](#trellonotificationgetboardbyfield)
  * [`trello.notification.getBoardById`](#trellonotificationgetboardbyid)
  * [`trello.notification.getById`](#trellonotificationgetbyid)
  * [`trello.notification.getByIdField`](#trellonotificationgetbyidfield)
  * [`trello.notification.getCardById`](#trellonotificationgetcardbyid)
  * [`trello.notification.getCardByIdNotificationByField`](#trellonotificationgetcardbyidnotificationbyfield)
  * [`trello.notification.getDisplayByIdNotification`](#trellonotificationgetdisplaybyidnotification)
  * [`trello.notification.getEntitiesByIdNotification`](#trellonotificationgetentitiesbyidnotification)
  * [`trello.notification.getListByIdNotification`](#trellonotificationgetlistbyidnotification)
  * [`trello.notification.getListByIdNotificationByField`](#trellonotificationgetlistbyidnotificationbyfield)
  * [`trello.notification.getMemberByIdField`](#trellonotificationgetmemberbyidfield)
  * [`trello.notification.getMemberByIdNotificationByField`](#trellonotificationgetmemberbyidnotificationbyfield)
  * [`trello.notification.getMemberByNotification`](#trellonotificationgetmemberbynotification)
  * [`trello.notification.getMemberCreatorById`](#trellonotificationgetmembercreatorbyid)
  * [`trello.notification.getOrganizationByIdNotification`](#trellonotificationgetorganizationbyidnotification)
  * [`trello.notification.getOrganizationByIdNotificationByField`](#trellonotificationgetorganizationbyidnotificationbyfield)
  * [`trello.notification.markAllAsRead`](#trellonotificationmarkallasread)
  * [`trello.notification.updateByIdNotification`](#trellonotificationupdatebyidnotification)
  * [`trello.notification.updateUnreadByIdNotification`](#trellonotificationupdateunreadbyidnotification)
  * [`trello.organization.create`](#trelloorganizationcreate)
  * [`trello.organization.deletePrefsAssociatedDomainByIdOrg`](#trelloorganizationdeleteprefsassociateddomainbyidorg)
  * [`trello.organization.getActionsByIdOrg`](#trelloorganizationgetactionsbyidorg)
  * [`trello.organization.getBoardsByIdOrgByFilter`](#trelloorganizationgetboardsbyidorgbyfilter)
  * [`trello.organization.getBoardsByOrgId`](#trelloorganizationgetboardsbyorgid)
  * [`trello.organization.getByIdAndField`](#trelloorganizationgetbyidandfield)
  * [`trello.organization.getByIdOrg`](#trelloorganizationgetbyidorg)
  * [`trello.organization.getMembersByIdOrg`](#trelloorganizationgetmembersbyidorg)
  * [`trello.organization.getMembersInvitedByIdOrg`](#trelloorganizationgetmembersinvitedbyidorg)
  * [`trello.organization.getMembersInvitedByIdOrgByField`](#trelloorganizationgetmembersinvitedbyidorgbyfield)
  * [`trello.organization.getMembershipsByIdOrgByIdMembership`](#trelloorganizationgetmembershipsbyidorgbyidmembership)
  * [`trello.organization.getOrganizationDeltas`](#trelloorganizationgetorganizationdeltas)
  * [`trello.organization.listMembersByIdOrgByFilter`](#trelloorganizationlistmembersbyidorgbyfilter)
  * [`trello.organization.listMembersCardsByIdOrgByIdMember`](#trelloorganizationlistmemberscardsbyidorgbyidmember)
  * [`trello.organization.listMembershipsByIdOrg`](#trelloorganizationlistmembershipsbyidorg)
  * [`trello.organization.removeByIdOrg`](#trelloorganizationremovebyidorg)
  * [`trello.organization.removeInviteRestrictByIdOrg`](#trelloorganizationremoveinviterestrictbyidorg)
  * [`trello.organization.removeLogoByIdOrg`](#trelloorganizationremovelogobyidorg)
  * [`trello.organization.removeMemberAll`](#trelloorganizationremovememberall)
  * [`trello.organization.removeMemberByIdOrgByIdMember`](#trelloorganizationremovememberbyidorgbyidmember)
  * [`trello.organization.updateByIdOrg`](#trelloorganizationupdatebyidorg)
  * [`trello.organization.updateDescriptionByIdOrg`](#trelloorganizationupdatedescriptionbyidorg)
  * [`trello.organization.updateDisplayNameByIdOrg`](#trelloorganizationupdatedisplaynamebyidorg)
  * [`trello.organization.updateMembersByIdOrg`](#trelloorganizationupdatemembersbyidorg)
  * [`trello.organization.updateMembersByIdOrgByIdMember`](#trelloorganizationupdatemembersbyidorgbyidmember)
  * [`trello.organization.updateMembersDeactivatedByIdOrgByIdMember`](#trelloorganizationupdatemembersdeactivatedbyidorgbyidmember)
  * [`trello.organization.updateMembershipByIdOrgByIdMembership`](#trelloorganizationupdatemembershipbyidorgbyidmembership)
  * [`trello.organization.updateNameByIdOrg`](#trelloorganizationupdatenamebyidorg)
  * [`trello.organization.updatePrefsAssociatedDomainByIdOrg`](#trelloorganizationupdateprefsassociateddomainbyidorg)
  * [`trello.organization.updatePrefsBoardVisibilityRestrictByIdOrg`](#trelloorganizationupdateprefsboardvisibilityrestrictbyidorg)
  * [`trello.organization.updatePrefsBoardVisibilityRestrictPublicByIdOrg`](#trelloorganizationupdateprefsboardvisibilityrestrictpublicbyidorg)
  * [`trello.organization.updatePrefsExternalMembersDisabledByIdOrg`](#trelloorganizationupdateprefsexternalmembersdisabledbyidorg)
  * [`trello.organization.updatePrefsGoogleAppsVersionByIdOrg`](#trelloorganizationupdateprefsgoogleappsversionbyidorg)
  * [`trello.organization.updatePrefsOrgInviteRestrictByIdOrg`](#trelloorganizationupdateprefsorginviterestrictbyidorg)
  * [`trello.organization.updatePrefsPermissionLevelByIdOrg`](#trelloorganizationupdateprefspermissionlevelbyidorg)
  * [`trello.organization.updatePrefsVisibilityByIdOrg`](#trelloorganizationupdateprefsvisibilitybyidorg)
  * [`trello.organization.updateWebsiteByIdOrg`](#trelloorganizationupdatewebsitebyidorg)
  * [`trello.organization.uploadLogoByIdOrg`](#trelloorganizationuploadlogobyidorg)
  * [`trello.search.findMembers`](#trellosearchfindmembers)
  * [`trello.search.getResults`](#trellosearchgetresults)
  * [`trello.session.createAndUpdate`](#trellosessioncreateandupdate)
  * [`trello.session.getSocketSessions`](#trellosessiongetsocketsessions)
  * [`trello.session.updateStatusByIdSession`](#trellosessionupdatestatusbyidsession)
  * [`trello.session.updateStatusByIdSession_0`](#trellosessionupdatestatusbyidsession_0)
  * [`trello.token.deleteByToken`](#trellotokendeletebytoken)
  * [`trello.token.getByToken`](#trellotokengetbytoken)
  * [`trello.token.getByTokenByField`](#trellotokengetbytokenbyfield)
  * [`trello.token.getMemberByField`](#trellotokengetmemberbyfield)
  * [`trello.token.getMemberByToken`](#trellotokengetmemberbytoken)
  * [`trello.token.getWebhookById`](#trellotokengetwebhookbyid)
  * [`trello.token.getWebhooks`](#trellotokengetwebhooks)
  * [`trello.token.registerWebhook`](#trellotokenregisterwebhook)
  * [`trello.token.removeByTokenByIdWebhook`](#trellotokenremovebytokenbyidwebhook)
  * [`trello.token.updateWebhooksByToken`](#trellotokenupdatewebhooksbytoken)
  * [`trello.type.getById`](#trellotypegetbyid)
  * [`trello.webhook.getById`](#trellowebhookgetbyid)
  * [`trello.webhook.getByIdField`](#trellowebhookgetbyidfield)
  * [`trello.webhook.removeById`](#trellowebhookremovebyid)
  * [`trello.webhook.update`](#trellowebhookupdate)
  * [`trello.webhook.updateActiveById`](#trellowebhookupdateactivebyid)
  * [`trello.webhook.updateByIdWebhook`](#trellowebhookupdatebyidwebhook)
  * [`trello.webhook.updateCallbackUrlById`](#trellowebhookupdatecallbackurlbyid)
  * [`trello.webhook.updateDescriptionByIdWebhook`](#trellowebhookupdatedescriptionbyidwebhook)
  * [`trello.webhook.updateModelById`](#trellowebhookupdatemodelbyid)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Trello&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Trello } from "trello-typescript-sdk";

const trello = new Trello({
  // Defining the base path is optional and defaults to https://trello.com/1
  // basePath: "https://trello.com/1",
  apiKey: "API_KEY",
  apiToken: "API_KEY",
});

const getBoardByIdActionResponse = await trello.action.getBoardByIdAction({
  idAction: "idAction_example",
  fields: "all",
});

console.log(getBoardByIdActionResponse);
```

## Reference<a id="reference"></a>


### `trello.action.getBoardByIdAction`<a id="trelloactiongetboardbyidaction"></a>

getActionsBoardByIdAction()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoardByIdActionResponse = await trello.action.getBoardByIdAction({
  idAction: "idAction_example",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idAction: `string`<a id="idaction-string"></a>

idAction

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{idAction}/board` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.action.getBoardByIdActionByField`<a id="trelloactiongetboardbyidactionbyfield"></a>

getActionsBoardByIdActionByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoardByIdActionByFieldResponse =
  await trello.action.getBoardByIdActionByField({
    idAction: "idAction_example",
    field: "field_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idAction: `string`<a id="idaction-string"></a>

idAction

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{idAction}/board/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.action.getById`<a id="trelloactiongetbyid"></a>

getActionsByIdAction()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await trello.action.getById({
  idAction: "idAction_example",
  fields: "all",
  memberFields: "avatarHash, fullName, initials and username",
  memberCreatorFields: "avatarHash, fullName, initials and username",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idAction: `string`<a id="idaction-string"></a>

idAction

##### display: `string`<a id="display-string"></a>

 true or false

##### entities: `string`<a id="entities-string"></a>

 true or false

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: data, date, idMemberCreator or type

##### member: `string`<a id="member-string"></a>

 true or false

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### memberCreator: `string`<a id="membercreator-string"></a>

 true or false

##### memberCreatorFields: `string`<a id="membercreatorfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{idAction}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.action.getByIdActionField`<a id="trelloactiongetbyidactionfield"></a>

getActionsByIdActionByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdActionFieldResponse = await trello.action.getByIdActionField({
  idAction: "idAction_example",
  field: "field_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idAction: `string`<a id="idaction-string"></a>

idAction

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{idAction}/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.action.getCardByIdAction`<a id="trelloactiongetcardbyidaction"></a>

getActionsCardByIdAction()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCardByIdActionResponse = await trello.action.getCardByIdAction({
  idAction: "idAction_example",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idAction: `string`<a id="idaction-string"></a>

idAction

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{idAction}/card` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.action.getCardByIdActionByField`<a id="trelloactiongetcardbyidactionbyfield"></a>

getActionsCardByIdActionByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCardByIdActionByFieldResponse =
  await trello.action.getCardByIdActionByField({
    idAction: "idAction_example",
    field: "field_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idAction: `string`<a id="idaction-string"></a>

idAction

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{idAction}/card/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.action.getDisplayByIdAction`<a id="trelloactiongetdisplaybyidaction"></a>

getActionsDisplayByIdAction()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDisplayByIdActionResponse = await trello.action.getDisplayByIdAction({
  idAction: "idAction_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idAction: `string`<a id="idaction-string"></a>

idAction

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{idAction}/display` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.action.getEntitiesByIdAction`<a id="trelloactiongetentitiesbyidaction"></a>

getActionsEntitiesByIdAction()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEntitiesByIdActionResponse = await trello.action.getEntitiesByIdAction(
  {
    idAction: "idAction_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idAction: `string`<a id="idaction-string"></a>

idAction

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{idAction}/entities` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.action.getListByIdAction`<a id="trelloactiongetlistbyidaction"></a>

getActionsListByIdAction()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListByIdActionResponse = await trello.action.getListByIdAction({
  idAction: "idAction_example",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idAction: `string`<a id="idaction-string"></a>

idAction

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: closed, idBoard, name, pos or subscribed

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{idAction}/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.action.getListByIdActionByField`<a id="trelloactiongetlistbyidactionbyfield"></a>

getActionsListByIdActionByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListByIdActionByFieldResponse =
  await trello.action.getListByIdActionByField({
    idAction: "idAction_example",
    field: "field_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idAction: `string`<a id="idaction-string"></a>

idAction

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{idAction}/list/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.action.getMemberByField`<a id="trelloactiongetmemberbyfield"></a>

getActionsMemberByIdActionByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMemberByFieldResponse = await trello.action.getMemberByField({
  idAction: "idAction_example",
  field: "field_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idAction: `string`<a id="idaction-string"></a>

idAction

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{idAction}/member/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.action.getMemberByIdAction`<a id="trelloactiongetmemberbyidaction"></a>

getActionsMemberByIdAction()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMemberByIdActionResponse = await trello.action.getMemberByIdAction({
  idAction: "idAction_example",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idAction: `string`<a id="idaction-string"></a>

idAction

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{idAction}/member` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.action.getMemberByIdActionByField`<a id="trelloactiongetmemberbyidactionbyfield"></a>

getActionsMemberCreatorByIdActionByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMemberByIdActionByFieldResponse =
  await trello.action.getMemberByIdActionByField({
    idAction: "idAction_example",
    field: "field_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idAction: `string`<a id="idaction-string"></a>

idAction

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{idAction}/memberCreator/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.action.getMemberCreatorByIdAction`<a id="trelloactiongetmembercreatorbyidaction"></a>

getActionsMemberCreatorByIdAction()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMemberCreatorByIdActionResponse =
  await trello.action.getMemberCreatorByIdAction({
    idAction: "idAction_example",
    fields: "all",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idAction: `string`<a id="idaction-string"></a>

idAction

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{idAction}/memberCreator` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.action.getOrgByIdActionByField`<a id="trelloactiongetorgbyidactionbyfield"></a>

getActionsOrganizationByIdActionByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOrgByIdActionByFieldResponse =
  await trello.action.getOrgByIdActionByField({
    idAction: "idAction_example",
    field: "field_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idAction: `string`<a id="idaction-string"></a>

idAction

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{idAction}/organization/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.action.getOrganizationByIdAction`<a id="trelloactiongetorganizationbyidaction"></a>

getActionsOrganizationByIdAction()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOrganizationByIdActionResponse =
  await trello.action.getOrganizationByIdAction({
    idAction: "idAction_example",
    fields: "all",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idAction: `string`<a id="idaction-string"></a>

idAction

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{idAction}/organization` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.action.removeByIdAction`<a id="trelloactionremovebyidaction"></a>

deleteActionsByIdAction()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdActionResponse = await trello.action.removeByIdAction({
  idAction: "idAction_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idAction: `string`<a id="idaction-string"></a>

idAction

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{idAction}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.action.updateByIdAction`<a id="trelloactionupdatebyidaction"></a>

updateActionsByIdAction()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdActionResponse = await trello.action.updateByIdAction({
  idAction: "idAction_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idAction: `string`<a id="idaction-string"></a>

idAction

##### text: `string`<a id="text-string"></a>

a string with a length from 1 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{idAction}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.action.updateTextByIdAction`<a id="trelloactionupdatetextbyidaction"></a>

updateActionsTextByIdAction()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTextByIdActionResponse = await trello.action.updateTextByIdAction({
  idAction: "idAction_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idAction: `string`<a id="idaction-string"></a>

idAction

##### value: `string`<a id="value-string"></a>

a string with a length from 1 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{idAction}/text` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.batch.getData`<a id="trellobatchgetdata"></a>

getBatch()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDataResponse = await trello.batch.getData({
  urls: "urls_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### urls: `string`<a id="urls-string"></a>

list of API v1 GET routes, not including the version prefix

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/batch` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.addChecklists`<a id="trelloboardaddchecklists"></a>

addBoardsChecklistsByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addChecklistsResponse = await trello.board.addChecklists({
  idBoard: "idBoard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### name: `string`<a id="name-string"></a>

a string with a length from 1 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/checklists` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.addLabelsByIdBoard`<a id="trelloboardaddlabelsbyidboard"></a>

addBoardsLabelsByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addLabelsByIdBoardResponse = await trello.board.addLabelsByIdBoard({
  idBoard: "idBoard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### color: `string`<a id="color-string"></a>

A valid label color or null

##### name: `string`<a id="name-string"></a>

a string with a length from 0 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/labels` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.addPowerUpsByIdBoard`<a id="trelloboardaddpowerupsbyidboard"></a>

addBoardsPowerUpsByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addPowerUpsByIdBoardResponse = await trello.board.addPowerUpsByIdBoard({
  idBoard: "idBoard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

One of: calendar, cardAging, recap or voting

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/powerUps` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.createBoard`<a id="trelloboardcreateboard"></a>

addBoards()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createBoardResponse = await trello.board.createBoard({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### closed: `string`<a id="closed-string"></a>

 true or false

##### desc: `string`<a id="desc-string"></a>

a string with a length from 0 to 16384

##### idBoardSource: `string`<a id="idboardsource-string"></a>

The id of the board to copy into the new board

##### idOrganization: `string`<a id="idorganization-string"></a>

The id or name of the organization to add the board to.

##### keepFromSource: `string`<a id="keepfromsource-string"></a>

Components of the source board to copy.

##### labelNames/blue: `string`<a id="labelnamesblue-string"></a>

a string with a length from 0 to 16384

##### labelNames/green: `string`<a id="labelnamesgreen-string"></a>

a string with a length from 0 to 16384

##### labelNames/orange: `string`<a id="labelnamesorange-string"></a>

a string with a length from 0 to 16384

##### labelNames/purple: `string`<a id="labelnamespurple-string"></a>

a string with a length from 0 to 16384

##### labelNames/red: `string`<a id="labelnamesred-string"></a>

a string with a length from 0 to 16384

##### labelNames/yellow: `string`<a id="labelnamesyellow-string"></a>

a string with a length from 0 to 16384

##### name: `string`<a id="name-string"></a>

a string with a length from 1 to 16384

##### powerUps: `string`<a id="powerups-string"></a>

all or a comma-separated list of: calendar, cardAging, recap or voting

##### prefs/background: `string`<a id="prefsbackground-string"></a>

A standard background name, or the id of a custom background

##### prefs/calendarFeedEnabled: `string`<a id="prefscalendarfeedenabled-string"></a>

 true or false

##### prefs/cardAging: `string`<a id="prefscardaging-string"></a>

One of: pirate or regular

##### prefs/cardCovers: `string`<a id="prefscardcovers-string"></a>

 true or false

##### prefs/comments: `string`<a id="prefscomments-string"></a>

One of: disabled, members, observers, org or public

##### prefs/invitations: `string`<a id="prefsinvitations-string"></a>

One of: admins or members

##### prefs/permissionLevel: `string`<a id="prefspermissionlevel-string"></a>

One of: org, private or public

##### prefs/selfJoin: `string`<a id="prefsselfjoin-string"></a>

 true or false

##### prefs/voting: `string`<a id="prefsvoting-string"></a>

One of: disabled, members, observers, org or public

##### prefs_background: `string`<a id="prefs_background-string"></a>

a string with a length from 0 to 16384

##### prefs_cardAging: `string`<a id="prefs_cardaging-string"></a>

One of: pirate or regular

##### prefs_cardCovers: `string`<a id="prefs_cardcovers-string"></a>

 true or false

##### prefs_comments: `string`<a id="prefs_comments-string"></a>

One of: disabled, members, observers, org or public

##### prefs_invitations: `string`<a id="prefs_invitations-string"></a>

One of: admins or members

##### prefs_permissionLevel: `string`<a id="prefs_permissionlevel-string"></a>

One of: org, private or public

##### prefs_selfJoin: `string`<a id="prefs_selfjoin-string"></a>

 true or false

##### prefs_voting: `string`<a id="prefs_voting-string"></a>

One of: disabled, members, observers, org or public

##### subscribed: `string`<a id="subscribed-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.createListsByIdBoard`<a id="trelloboardcreatelistsbyidboard"></a>

addBoardsListsByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createListsByIdBoardResponse = await trello.board.createListsByIdBoard({
  idBoard: "idBoard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### name: `string`<a id="name-string"></a>

a string with a length from 1 to 16384

##### pos: `string`<a id="pos-string"></a>

A position. top , bottom , or a positive number.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/lists` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.filterCardsByIdBoard`<a id="trelloboardfiltercardsbyidboard"></a>

getBoardsCardsByIdBoardByFilter()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const filterCardsByIdBoardResponse = await trello.board.filterCardsByIdBoard({
  idBoard: "idBoard_example",
  filter: "filter_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### filter: `string`<a id="filter-string"></a>

filter

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/cards/{filter}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.generateCalendarKeyById`<a id="trelloboardgeneratecalendarkeybyid"></a>

addBoardsCalendarKeyGenerateByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateCalendarKeyByIdResponse =
  await trello.board.generateCalendarKeyById({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/calendarKey/generate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.generateEmailKey`<a id="trelloboardgenerateemailkey"></a>

addBoardsEmailKeyGenerateByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateEmailKeyResponse = await trello.board.generateEmailKey({
  idBoard: "idBoard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/emailKey/generate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.getBoardStarsById`<a id="trelloboardgetboardstarsbyid"></a>

getBoardsBoardStarsByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoardStarsByIdResponse = await trello.board.getBoardStarsById({
  idBoard: "idBoard_example",
  filter: "mine",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### filter: `string`<a id="filter-string"></a>

One of: mine or none

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/boardStars` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.getById`<a id="trelloboardgetbyid"></a>

getBoardsByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await trello.board.getById({
  idBoard: "idBoard_example",
  actionsFormat: "list",
  actionsLimit: "50",
  actionFields: "all",
  actionMemberFields: "avatarHash, fullName, initials and username",
  actionMemberCreatorFields: "avatarHash, fullName, initials and username",
  cards: "none",
  cardFields: "all",
  cardAttachmentFields: "all",
  cardChecklists: "none",
  boardStars: "none",
  labels: "none",
  labelFields: "all",
  labelsLimit: "50",
  lists: "none",
  listFields: "all",
  memberships: "none",
  membershipsMemberFields: "fullName and username",
  members: "none",
  memberFields: "avatarHash, initials, fullName, username and confirmed",
  membersInvited: "none",
  membersInvitedFields: "avatarHash, initials, fullName and username",
  checklists: "none",
  checklistFields: "all",
  organizationFields: "name and displayName",
  organizationMemberships: "none",
  fields:
    "name, desc, descData, closed, idOrganization, pinned, url, shortUrl, prefs and labelNames",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### actions: `string`<a id="actions-string"></a>

all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization

##### actionsEntities: `string`<a id="actionsentities-string"></a>

 true or false

##### actionsDisplay: `string`<a id="actionsdisplay-string"></a>

 true or false

##### actionsFormat: `string`<a id="actionsformat-string"></a>

One of: count, list or minimal

##### actionsSince: `string`<a id="actionssince-string"></a>

A date, null or lastView

##### actionsLimit: `string`<a id="actionslimit-string"></a>

a number from 0 to 1000

##### actionFields: `string`<a id="actionfields-string"></a>

all or a comma-separated list of: data, date, idMemberCreator or type

##### actionMember: `string`<a id="actionmember-string"></a>

 true or false

##### actionMemberFields: `string`<a id="actionmemberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### actionMemberCreator: `string`<a id="actionmembercreator-string"></a>

 true or false

##### actionMemberCreatorFields: `string`<a id="actionmembercreatorfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### cards: `string`<a id="cards-string"></a>

One of: all, closed, none, open or visible

##### cardFields: `string`<a id="cardfields-string"></a>

all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

##### cardAttachments: `string`<a id="cardattachments-string"></a>

A boolean value or &quot;cover&quot; for only card cover attachments

##### cardAttachmentFields: `string`<a id="cardattachmentfields-string"></a>

all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url

##### cardChecklists: `string`<a id="cardchecklists-string"></a>

One of: all or none

##### cardStickers: `string`<a id="cardstickers-string"></a>

 true or false

##### boardStars: `string`<a id="boardstars-string"></a>

One of: mine or none

##### labels: `string`<a id="labels-string"></a>

One of: all or none

##### labelFields: `string`<a id="labelfields-string"></a>

all or a comma-separated list of: color, idBoard, name or uses

##### labelsLimit: `string`<a id="labelslimit-string"></a>

a number from 0 to 1000

##### lists: `string`<a id="lists-string"></a>

One of: all, closed, none or open

##### listFields: `string`<a id="listfields-string"></a>

all or a comma-separated list of: closed, idBoard, name, pos or subscribed

##### memberships: `string`<a id="memberships-string"></a>

all or a comma-separated list of: active, admin, deactivated, me or normal

##### membershipsMember: `string`<a id="membershipsmember-string"></a>

 true or false

##### membershipsMemberFields: `string`<a id="membershipsmemberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### members: `string`<a id="members-string"></a>

One of: admins, all, none, normal or owners

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### membersInvited: `string`<a id="membersinvited-string"></a>

One of: admins, all, none, normal or owners

##### membersInvitedFields: `string`<a id="membersinvitedfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### checklists: `string`<a id="checklists-string"></a>

One of: all or none

##### checklistFields: `string`<a id="checklistfields-string"></a>

all or a comma-separated list of: idBoard, idCard, name or pos

##### organization: `string`<a id="organization-string"></a>

 true or false

##### organizationFields: `string`<a id="organizationfields-string"></a>

all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website

##### organizationMemberships: `string`<a id="organizationmemberships-string"></a>

all or a comma-separated list of: active, admin, deactivated, me or normal

##### myPrefs: `string`<a id="myprefs-string"></a>

 true or false

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.getByIdField`<a id="trelloboardgetbyidfield"></a>

getBoardsByIdBoardByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdFieldResponse = await trello.board.getByIdField({
  idBoard: "idBoard_example",
  field: "field_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.getCardsByIdBoard`<a id="trelloboardgetcardsbyidboard"></a>

getBoardsCardsByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCardsByIdBoardResponse = await trello.board.getCardsByIdBoard({
  idBoard: "idBoard_example",
  attachmentFields: "all",
  memberFields: "avatarHash, fullName, initials and username",
  checklists: "none",
  filter: "visible",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### actions: `string`<a id="actions-string"></a>

all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization

##### attachments: `string`<a id="attachments-string"></a>

A boolean value or &quot;cover&quot; for only card cover attachments

##### attachmentFields: `string`<a id="attachmentfields-string"></a>

all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url

##### stickers: `string`<a id="stickers-string"></a>

 true or false

##### members: `string`<a id="members-string"></a>

 true or false

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### checkItemStates: `string`<a id="checkitemstates-string"></a>

 true or false

##### checklists: `string`<a id="checklists-string"></a>

One of: all or none

##### limit: `string`<a id="limit-string"></a>

a number from 1 to 1000

##### since: `string`<a id="since-string"></a>

A date, or null

##### before: `string`<a id="before-string"></a>

A date, or null

##### filter: `string`<a id="filter-string"></a>

One of: all, closed, none, open or visible

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/cards` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.getCardsByIdBoardByIdCard`<a id="trelloboardgetcardsbyidboardbyidcard"></a>

getBoardsCardsByIdBoardByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCardsByIdBoardByIdCardResponse =
  await trello.board.getCardsByIdBoardByIdCard({
    idBoard: "idBoard_example",
    idCard: "idCard_example",
    attachmentFields: "all",
    actionsLimit: "50",
    actionFields: "all",
    actionMemberCreatorFields: "avatarHash, fullName, initials and username",
    memberFields: "avatarHash, initials, fullName and username",
    checkItemStateFields: "all",
    checklists: "none",
    checklistFields: "all",
    fields: "all",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### idCard: `string`<a id="idcard-string"></a>

idCard

##### attachments: `string`<a id="attachments-string"></a>

A boolean value or &quot;cover&quot; for only card cover attachments

##### attachmentFields: `string`<a id="attachmentfields-string"></a>

all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url

##### actions: `string`<a id="actions-string"></a>

all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization

##### actionsEntities: `string`<a id="actionsentities-string"></a>

 true or false

##### actionsDisplay: `string`<a id="actionsdisplay-string"></a>

 true or false

##### actionsLimit: `string`<a id="actionslimit-string"></a>

a number from 0 to 1000

##### actionFields: `string`<a id="actionfields-string"></a>

all or a comma-separated list of: data, date, idMemberCreator or type

##### actionMemberCreatorFields: `string`<a id="actionmembercreatorfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### members: `string`<a id="members-string"></a>

 true or false

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### checkItemStates: `string`<a id="checkitemstates-string"></a>

 true or false

##### checkItemStateFields: `string`<a id="checkitemstatefields-string"></a>

all or a comma-separated list of: idCheckItem or state

##### labels: `string`<a id="labels-string"></a>

 true or false

##### checklists: `string`<a id="checklists-string"></a>

One of: all or none

##### checklistFields: `string`<a id="checklistfields-string"></a>

all or a comma-separated list of: idBoard, idCard, name or pos

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/cards/{idCard}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.getChecklistsById`<a id="trelloboardgetchecklistsbyid"></a>

getBoardsChecklistsByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getChecklistsByIdResponse = await trello.board.getChecklistsById({
  idBoard: "idBoard_example",
  cards: "none",
  cardFields: "all",
  checkItems: "all",
  checkItemFields: "name, nameData, pos and state",
  filter: "all",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### cards: `string`<a id="cards-string"></a>

One of: all, closed, none, open or visible

##### cardFields: `string`<a id="cardfields-string"></a>

all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

##### checkItems: `string`<a id="checkitems-string"></a>

One of: all or none

##### checkItemFields: `string`<a id="checkitemfields-string"></a>

all or a comma-separated list of: name, nameData, pos, state or type

##### filter: `string`<a id="filter-string"></a>

One of: all or none

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: idBoard, idCard, name or pos

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/checklists` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.getDeltasByIdBoard`<a id="trelloboardgetdeltasbyidboard"></a>

getBoardsDeltasByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDeltasByIdBoardResponse = await trello.board.getDeltasByIdBoard({
  idBoard: "idBoard_example",
  tags: "tags_example",
  ixLastUpdate: "ixLastUpdate_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### tags: `string`<a id="tags-string"></a>

A valid tag for subscribing

##### ixLastUpdate: `string`<a id="ixlastupdate-string"></a>

a number from -1 to Infinity

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/deltas` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.getLabelsByIdBoardByIdLabel`<a id="trelloboardgetlabelsbyidboardbyidlabel"></a>

getBoardsLabelsByIdBoardByIdLabel()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLabelsByIdBoardByIdLabelResponse =
  await trello.board.getLabelsByIdBoardByIdLabel({
    idBoard: "idBoard_example",
    idLabel: "idLabel_example",
    fields: "all",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### idLabel: `string`<a id="idlabel-string"></a>

idLabel

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: color, idBoard, name or uses

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/labels/{idLabel}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.getListsByFilter`<a id="trelloboardgetlistsbyfilter"></a>

getBoardsListsByIdBoardByFilter()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListsByFilterResponse = await trello.board.getListsByFilter({
  idBoard: "idBoard_example",
  filter: "filter_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### filter: `string`<a id="filter-string"></a>

filter

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/lists/{filter}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.getListsByIdBoard`<a id="trelloboardgetlistsbyidboard"></a>

getBoardsListsByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListsByIdBoardResponse = await trello.board.getListsByIdBoard({
  idBoard: "idBoard_example",
  cards: "none",
  cardFields: "all",
  filter: "open",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### cards: `string`<a id="cards-string"></a>

One of: all, closed, none, open or visible

##### cardFields: `string`<a id="cardfields-string"></a>

all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

##### filter: `string`<a id="filter-string"></a>

One of: all, closed, none or open

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: closed, idBoard, name, pos or subscribed

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/lists` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.getMembersByFilter`<a id="trelloboardgetmembersbyfilter"></a>

getBoardsMembersByIdBoardByFilter()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMembersByFilterResponse = await trello.board.getMembersByFilter({
  idBoard: "idBoard_example",
  filter: "filter_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### filter: `string`<a id="filter-string"></a>

filter

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/members/{filter}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.getMembersByIdBoard`<a id="trelloboardgetmembersbyidboard"></a>

getBoardsMembersByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMembersByIdBoardResponse = await trello.board.getMembersByIdBoard({
  idBoard: "idBoard_example",
  filter: "all",
  fields: "fullName and username",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### filter: `string`<a id="filter-string"></a>

One of: admins, all, none, normal or owners

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### activity: `string`<a id="activity-string"></a>

true or false ; works for premium organizations only.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/members` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.getMembersCardsByIdBoardByIdMember`<a id="trelloboardgetmemberscardsbyidboardbyidmember"></a>

getBoardsMembersCardsByIdBoardByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMembersCardsByIdBoardByIdMemberResponse =
  await trello.board.getMembersCardsByIdBoardByIdMember({
    idBoard: "idBoard_example",
    idMember: "idMember_example",
    attachmentFields: "all",
    memberFields: "avatarHash, fullName, initials and username",
    checklists: "none",
    boardFields: "name, desc, closed, idOrganization, pinned, url and prefs",
    listFields: "all",
    filter: "visible",
    fields: "all",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### idMember: `string`<a id="idmember-string"></a>

idMember

##### actions: `string`<a id="actions-string"></a>

all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization

##### attachments: `string`<a id="attachments-string"></a>

A boolean value or &quot;cover&quot; for only card cover attachments

##### attachmentFields: `string`<a id="attachmentfields-string"></a>

all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url

##### members: `string`<a id="members-string"></a>

 true or false

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### checkItemStates: `string`<a id="checkitemstates-string"></a>

 true or false

##### checklists: `string`<a id="checklists-string"></a>

One of: all or none

##### board: `string`<a id="board-string"></a>

 true or false

##### boardFields: `string`<a id="boardfields-string"></a>

all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

##### list: `string`<a id="list-string"></a>

 true or false

##### listFields: `string`<a id="listfields-string"></a>

all or a comma-separated list of: closed, idBoard, name, pos or subscribed

##### filter: `string`<a id="filter-string"></a>

One of: all, closed, none, open or visible

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/members/{idMember}/cards` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.getMembersInvitedByField`<a id="trelloboardgetmembersinvitedbyfield"></a>

getBoardsMembersInvitedByIdBoardByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMembersInvitedByFieldResponse =
  await trello.board.getMembersInvitedByField({
    idBoard: "idBoard_example",
    field: "field_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/membersInvited/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.getMembersInvitedByIdBoard`<a id="trelloboardgetmembersinvitedbyidboard"></a>

getBoardsMembersInvitedByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMembersInvitedByIdBoardResponse =
  await trello.board.getMembersInvitedByIdBoard({
    idBoard: "idBoard_example",
    fields: "all",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/membersInvited` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.getMembershipsByIdBoard`<a id="trelloboardgetmembershipsbyidboard"></a>

getBoardsMembershipsByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMembershipsByIdBoardResponse =
  await trello.board.getMembershipsByIdBoard({
    idBoard: "idBoard_example",
    filter: "all",
    memberFields: "fullName and username",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### filter: `string`<a id="filter-string"></a>

all or a comma-separated list of: active, admin, deactivated, me or normal

##### member: `string`<a id="member-string"></a>

 true or false

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/memberships` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.getMembershipsByIdBoardByIdMembership`<a id="trelloboardgetmembershipsbyidboardbyidmembership"></a>

getBoardsMembershipsByIdBoardByIdMembership()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMembershipsByIdBoardByIdMembershipResponse =
  await trello.board.getMembershipsByIdBoardByIdMembership({
    idBoard: "idBoard_example",
    idMembership: "idMembership_example",
    memberFields: "fullName and username",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### idMembership: `string`<a id="idmembership-string"></a>

idMembership

##### member: `string`<a id="member-string"></a>

 true or false

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/memberships/{idMembership}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.getMyPrefsById`<a id="trelloboardgetmyprefsbyid"></a>

getBoardsMyPrefsByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMyPrefsByIdResponse = await trello.board.getMyPrefsById({
  idBoard: "idBoard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/myPrefs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.getOrganizationById`<a id="trelloboardgetorganizationbyid"></a>

getBoardsOrganizationByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOrganizationByIdResponse = await trello.board.getOrganizationById({
  idBoard: "idBoard_example",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/organization` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.getOrganizationByIdBoardByField`<a id="trelloboardgetorganizationbyidboardbyfield"></a>

getBoardsOrganizationByIdBoardByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOrganizationByIdBoardByFieldResponse =
  await trello.board.getOrganizationByIdBoardByField({
    idBoard: "idBoard_example",
    field: "field_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/organization/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.listActionsByIdBoard`<a id="trelloboardlistactionsbyidboard"></a>

getBoardsActionsByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listActionsByIdBoardResponse = await trello.board.listActionsByIdBoard({
  idBoard: "idBoard_example",
  filter: "all",
  fields: "all",
  limit: "50",
  format: "list",
  page: "0",
  memberFields: "avatarHash, fullName, initials and username",
  memberCreatorFields: "avatarHash, fullName, initials and username",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### entities: `string`<a id="entities-string"></a>

 true or false

##### display: `string`<a id="display-string"></a>

 true or false

##### filter: `string`<a id="filter-string"></a>

all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: data, date, idMemberCreator or type

##### limit: `string`<a id="limit-string"></a>

a number from 0 to 1000

##### format: `string`<a id="format-string"></a>

One of: count, list or minimal

##### since: `string`<a id="since-string"></a>

A date, null or lastView

##### before: `string`<a id="before-string"></a>

A date, or null

##### page: `string`<a id="page-string"></a>

Page * limit must be less than 1000

##### idModels: `string`<a id="idmodels-string"></a>

Only return actions related to these model ids

##### member: `string`<a id="member-string"></a>

 true or false

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### memberCreator: `string`<a id="membercreator-string"></a>

 true or false

##### memberCreatorFields: `string`<a id="membercreatorfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/actions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.listLabelsByIdBoard`<a id="trelloboardlistlabelsbyidboard"></a>

getBoardsLabelsByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLabelsByIdBoardResponse = await trello.board.listLabelsByIdBoard({
  idBoard: "idBoard_example",
  fields: "all",
  limit: "50",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: color, idBoard, name or uses

##### limit: `string`<a id="limit-string"></a>

a number from 0 to 1000

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/labels` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.markAsViewedByIdBoard`<a id="trelloboardmarkasviewedbyidboard"></a>

addBoardsMarkAsViewedByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const markAsViewedByIdBoardResponse = await trello.board.markAsViewedByIdBoard({
  idBoard: "idBoard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/markAsViewed` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.removeMember`<a id="trelloboardremovemember"></a>

deleteBoardsMembersByIdBoardByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeMemberResponse = await trello.board.removeMember({
  idBoard: "idBoard_example",
  idMember: "idMember_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### idMember: `string`<a id="idmember-string"></a>

idMember

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/members/{idMember}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.removePowerUp`<a id="trelloboardremovepowerup"></a>

deleteBoardsPowerUpsByIdBoardByPowerUp()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removePowerUpResponse = await trello.board.removePowerUp({
  idBoard: "idBoard_example",
  powerUp: "powerUp_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### powerUp: `string`<a id="powerup-string"></a>

powerUp

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/powerUps/{powerUp}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateById`<a id="trelloboardupdatebyid"></a>

updateBoardsByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await trello.board.updateById({
  idBoard: "idBoard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### closed: `string`<a id="closed-string"></a>

 true or false

##### desc: `string`<a id="desc-string"></a>

a string with a length from 0 to 16384

##### idBoardSource: `string`<a id="idboardsource-string"></a>

The id of the board to copy into the new board

##### idOrganization: `string`<a id="idorganization-string"></a>

The id or name of the organization to add the board to.

##### keepFromSource: `string`<a id="keepfromsource-string"></a>

Components of the source board to copy.

##### labelNames/blue: `string`<a id="labelnamesblue-string"></a>

a string with a length from 0 to 16384

##### labelNames/green: `string`<a id="labelnamesgreen-string"></a>

a string with a length from 0 to 16384

##### labelNames/orange: `string`<a id="labelnamesorange-string"></a>

a string with a length from 0 to 16384

##### labelNames/purple: `string`<a id="labelnamespurple-string"></a>

a string with a length from 0 to 16384

##### labelNames/red: `string`<a id="labelnamesred-string"></a>

a string with a length from 0 to 16384

##### labelNames/yellow: `string`<a id="labelnamesyellow-string"></a>

a string with a length from 0 to 16384

##### name: `string`<a id="name-string"></a>

a string with a length from 1 to 16384

##### powerUps: `string`<a id="powerups-string"></a>

all or a comma-separated list of: calendar, cardAging, recap or voting

##### prefs/background: `string`<a id="prefsbackground-string"></a>

A standard background name, or the id of a custom background

##### prefs/calendarFeedEnabled: `string`<a id="prefscalendarfeedenabled-string"></a>

 true or false

##### prefs/cardAging: `string`<a id="prefscardaging-string"></a>

One of: pirate or regular

##### prefs/cardCovers: `string`<a id="prefscardcovers-string"></a>

 true or false

##### prefs/comments: `string`<a id="prefscomments-string"></a>

One of: disabled, members, observers, org or public

##### prefs/invitations: `string`<a id="prefsinvitations-string"></a>

One of: admins or members

##### prefs/permissionLevel: `string`<a id="prefspermissionlevel-string"></a>

One of: org, private or public

##### prefs/selfJoin: `string`<a id="prefsselfjoin-string"></a>

 true or false

##### prefs/voting: `string`<a id="prefsvoting-string"></a>

One of: disabled, members, observers, org or public

##### prefs_background: `string`<a id="prefs_background-string"></a>

a string with a length from 0 to 16384

##### prefs_cardAging: `string`<a id="prefs_cardaging-string"></a>

One of: pirate or regular

##### prefs_cardCovers: `string`<a id="prefs_cardcovers-string"></a>

 true or false

##### prefs_comments: `string`<a id="prefs_comments-string"></a>

One of: disabled, members, observers, org or public

##### prefs_invitations: `string`<a id="prefs_invitations-string"></a>

One of: admins or members

##### prefs_permissionLevel: `string`<a id="prefs_permissionlevel-string"></a>

One of: org, private or public

##### prefs_selfJoin: `string`<a id="prefs_selfjoin-string"></a>

 true or false

##### prefs_voting: `string`<a id="prefs_voting-string"></a>

One of: disabled, members, observers, org or public

##### subscribed: `string`<a id="subscribed-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateClosedById`<a id="trelloboardupdateclosedbyid"></a>

updateBoardsClosedByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateClosedByIdResponse = await trello.board.updateClosedById({
  idBoard: "idBoard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/closed` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateDescriptionByIdBoard`<a id="trelloboardupdatedescriptionbyidboard"></a>

updateBoardsDescByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDescriptionByIdBoardResponse =
  await trello.board.updateDescriptionByIdBoard({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

a string with a length from 0 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/desc` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateLabelNamesBlueById`<a id="trelloboardupdatelabelnamesbluebyid"></a>

updateBoardsLabelNamesBlueByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateLabelNamesBlueByIdResponse =
  await trello.board.updateLabelNamesBlueById({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

a string with a length from 0 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/labelNames/blue` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateLabelNamesGreenByIdBoardPut`<a id="trelloboardupdatelabelnamesgreenbyidboardput"></a>

updateBoardsLabelNamesGreenByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateLabelNamesGreenByIdBoardPutResponse =
  await trello.board.updateLabelNamesGreenByIdBoardPut({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

a string with a length from 0 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/labelNames/green` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateLabelNamesOrangeByIdBoard`<a id="trelloboardupdatelabelnamesorangebyidboard"></a>

updateBoardsLabelNamesOrangeByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateLabelNamesOrangeByIdBoardResponse =
  await trello.board.updateLabelNamesOrangeByIdBoard({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

a string with a length from 0 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/labelNames/orange` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateLabelNamesPurpleByIdBoard`<a id="trelloboardupdatelabelnamespurplebyidboard"></a>

updateBoardsLabelNamesPurpleByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateLabelNamesPurpleByIdBoardResponse =
  await trello.board.updateLabelNamesPurpleByIdBoard({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

a string with a length from 0 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/labelNames/purple` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateLabelNamesRed`<a id="trelloboardupdatelabelnamesred"></a>

updateBoardsLabelNamesRedByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateLabelNamesRedResponse = await trello.board.updateLabelNamesRed({
  idBoard: "idBoard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

a string with a length from 0 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/labelNames/red` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateLabelNamesYellowByIdBoard`<a id="trelloboardupdatelabelnamesyellowbyidboard"></a>

updateBoardsLabelNamesYellowByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateLabelNamesYellowByIdBoardResponse =
  await trello.board.updateLabelNamesYellowByIdBoard({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

a string with a length from 0 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/labelNames/yellow` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateMembersByIdBoard`<a id="trelloboardupdatemembersbyidboard"></a>

updateBoardsMembersByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMembersByIdBoardResponse =
  await trello.board.updateMembersByIdBoard({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### email: `string`<a id="email-string"></a>

An email address

##### fullName: `string`<a id="fullname-string"></a>

A string with a length of at least 1.  Cannot begin or end with a space.

##### type: `string`<a id="type-string"></a>

One of: admin, normal or observer

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/members` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateMembersByIdBoardByIdMember`<a id="trelloboardupdatemembersbyidboardbyidmember"></a>

updateBoardsMembersByIdBoardByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMembersByIdBoardByIdMemberResponse =
  await trello.board.updateMembersByIdBoardByIdMember({
    idBoard: "idBoard_example",
    idMember: "idMember_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### idMember: `string`<a id="idmember-string"></a>

idMember

##### email: `string`<a id="email-string"></a>

An email address

##### fullName: `string`<a id="fullname-string"></a>

A string with a length of at least 1.  Cannot begin or end with a space.

##### type: `string`<a id="type-string"></a>

One of: admin, normal or observer

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/members/{idMember}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateMembershipsByIdBoardByIdMembership`<a id="trelloboardupdatemembershipsbyidboardbyidmembership"></a>

updateBoardsMembershipsByIdBoardByIdMembership()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMembershipsByIdBoardByIdMembershipResponse =
  await trello.board.updateMembershipsByIdBoardByIdMembership({
    idBoard: "idBoard_example",
    idMembership: "idMembership_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### idMembership: `string`<a id="idmembership-string"></a>

idMembership

##### member_fields: `string`<a id="member_fields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### type: `string`<a id="type-string"></a>

One of: admin, normal or observer

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/memberships/{idMembership}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateMyPrefsEmailListByIdBoard`<a id="trelloboardupdatemyprefsemaillistbyidboard"></a>

updateBoardsMyPrefsIdEmailListByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMyPrefsEmailListByIdBoardResponse =
  await trello.board.updateMyPrefsEmailListByIdBoard({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

An id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/myPrefs/idEmailList` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateMyPrefsEmailPositionByIdBoard`<a id="trelloboardupdatemyprefsemailpositionbyidboard"></a>

updateBoardsMyPrefsEmailPositionByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMyPrefsEmailPositionByIdBoardResponse =
  await trello.board.updateMyPrefsEmailPositionByIdBoard({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

One of: bottom or top

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/myPrefs/emailPosition` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateMyPrefsShowListGuideByIdBoard`<a id="trelloboardupdatemyprefsshowlistguidebyidboard"></a>

updateBoardsMyPrefsShowListGuideByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMyPrefsShowListGuideByIdBoardResponse =
  await trello.board.updateMyPrefsShowListGuideByIdBoard({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/myPrefs/showListGuide` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateMyPrefsShowSidebar`<a id="trelloboardupdatemyprefsshowsidebar"></a>

updateBoardsMyPrefsShowSidebarByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMyPrefsShowSidebarResponse =
  await trello.board.updateMyPrefsShowSidebar({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/myPrefs/showSidebar` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateMyPrefsShowSidebarActionsByIdBoard`<a id="trelloboardupdatemyprefsshowsidebaractionsbyidboard"></a>

updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMyPrefsShowSidebarActionsByIdBoardResponse =
  await trello.board.updateMyPrefsShowSidebarActionsByIdBoard({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/myPrefs/showSidebarBoardActions` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateMyPrefsShowSidebarActivityByIdBoard`<a id="trelloboardupdatemyprefsshowsidebaractivitybyidboard"></a>

updateBoardsMyPrefsShowSidebarActivityByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMyPrefsShowSidebarActivityByIdBoardResponse =
  await trello.board.updateMyPrefsShowSidebarActivityByIdBoard({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/myPrefs/showSidebarActivity` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateNameById`<a id="trelloboardupdatenamebyid"></a>

updateBoardsNameByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateNameByIdResponse = await trello.board.updateNameById({
  idBoard: "idBoard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

a string with a length from 1 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/name` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateOrganizationByIdBoard`<a id="trelloboardupdateorganizationbyidboard"></a>

updateBoardsIdOrganizationByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOrganizationByIdBoardResponse =
  await trello.board.updateOrganizationByIdBoard({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

a string with a length from 0 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/idOrganization` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updatePrefsBackgroundByIdBoard`<a id="trelloboardupdateprefsbackgroundbyidboard"></a>

updateBoardsPrefsBackgroundByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsBackgroundByIdBoardResponse =
  await trello.board.updatePrefsBackgroundByIdBoard({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

A standard background name, or the id of a custom background

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/prefs/background` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updatePrefsCalendarFeedEnabledById`<a id="trelloboardupdateprefscalendarfeedenabledbyid"></a>

updateBoardsPrefsCalendarFeedEnabledByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsCalendarFeedEnabledByIdResponse =
  await trello.board.updatePrefsCalendarFeedEnabledById({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/prefs/calendarFeedEnabled` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updatePrefsCardAgingByIdBoard`<a id="trelloboardupdateprefscardagingbyidboard"></a>

updateBoardsPrefsCardAgingByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsCardAgingByIdBoardResponse =
  await trello.board.updatePrefsCardAgingByIdBoard({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

One of: pirate or regular

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/prefs/cardAging` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updatePrefsCardCoversByIdBoard`<a id="trelloboardupdateprefscardcoversbyidboard"></a>

updateBoardsPrefsCardCoversByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsCardCoversByIdBoardResponse =
  await trello.board.updatePrefsCardCoversByIdBoard({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/prefs/cardCovers` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updatePrefsCommentsByIdBoard`<a id="trelloboardupdateprefscommentsbyidboard"></a>

updateBoardsPrefsCommentsByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsCommentsByIdBoardResponse =
  await trello.board.updatePrefsCommentsByIdBoard({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

One of: disabled, members, observers, org or public

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/prefs/comments` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updatePrefsInvitationsByIdBoard`<a id="trelloboardupdateprefsinvitationsbyidboard"></a>

updateBoardsPrefsInvitationsByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsInvitationsByIdBoardResponse =
  await trello.board.updatePrefsInvitationsByIdBoard({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

One of: admins or members

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/prefs/invitations` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updatePrefsPermissionLevelById`<a id="trelloboardupdateprefspermissionlevelbyid"></a>

updateBoardsPrefsPermissionLevelByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsPermissionLevelByIdResponse =
  await trello.board.updatePrefsPermissionLevelById({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

One of: private or public

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/prefs/permissionLevel` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updatePrefsSelfJoinByIdBoard`<a id="trelloboardupdateprefsselfjoinbyidboard"></a>

updateBoardsPrefsSelfJoinByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsSelfJoinByIdBoardResponse =
  await trello.board.updatePrefsSelfJoinByIdBoard({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/prefs/selfJoin` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updatePrefsShowSidebarMembersById`<a id="trelloboardupdateprefsshowsidebarmembersbyid"></a>

updateBoardsMyPrefsShowSidebarMembersByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsShowSidebarMembersByIdResponse =
  await trello.board.updatePrefsShowSidebarMembersById({
    idBoard: "idBoard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/myPrefs/showSidebarMembers` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateSubscribedById`<a id="trelloboardupdatesubscribedbyid"></a>

updateBoardsSubscribedByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSubscribedByIdResponse = await trello.board.updateSubscribedById({
  idBoard: "idBoard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/subscribed` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.board.updateVotingPrefsById`<a id="trelloboardupdatevotingprefsbyid"></a>

updateBoardsPrefsVotingByIdBoard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateVotingPrefsByIdResponse = await trello.board.updateVotingPrefsById({
  idBoard: "idBoard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

board_id

##### value: `string`<a id="value-string"></a>

One of: disabled, members, observers, org or public

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/boards/{idBoard}/prefs/voting` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.addActionsCommentsByIdCard`<a id="trellocardaddactionscommentsbyidcard"></a>

addCardsActionsCommentsByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addActionsCommentsByIdCardResponse =
  await trello.card.addActionsCommentsByIdCard({
    idCard: "idCard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### text: `string`<a id="text-string"></a>

a string with a length from 1 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/actions/comments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.addAttachmentsByIdCard`<a id="trellocardaddattachmentsbyidcard"></a>

addCardsAttachmentsByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addAttachmentsByIdCardResponse = await trello.card.addAttachmentsByIdCard(
  {
    idCard: "idCard_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### file: `string`<a id="file-string"></a>

A file

##### mimeType: `string`<a id="mimetype-string"></a>

a string with a length from 0 to 256

##### name: `string`<a id="name-string"></a>

a string with a length from 0 to 256

##### url: `string`<a id="url-string"></a>

A URL starting with http:// or https:// or null

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/attachments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.addChecklistCheckItem`<a id="trellocardaddchecklistcheckitem"></a>

addCardsChecklistCheckItemByIdCardByIdChecklist()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addChecklistCheckItemResponse = await trello.card.addChecklistCheckItem({
  idCard: "idCard_example",
  idChecklist: "idChecklist_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

##### name: `string`<a id="name-string"></a>

a string with a length from 1 to 16384

##### pos: `string`<a id="pos-string"></a>

A position. top , bottom , or a positive number.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/checklist/{idChecklist}/checkItem` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.addChecklists`<a id="trellocardaddchecklists"></a>

addCardsChecklistsByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addChecklistsResponse = await trello.card.addChecklists({
  idCard: "idCard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### idChecklistSource: `string`<a id="idchecklistsource-string"></a>

The id of the source checklist to copy into a new checklist.

##### name: `string`<a id="name-string"></a>

a string with a length from 0 to 16384

##### value: `string`<a id="value-string"></a>

The id of the checklist to add to the card, or null to create a new one.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/checklists` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.addIdLabelsToCard`<a id="trellocardaddidlabelstocard"></a>

addCardsIdLabelsByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addIdLabelsToCardResponse = await trello.card.addIdLabelsToCard({
  idCard: "idCard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### value: `string`<a id="value-string"></a>

The id of the label to add

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/idLabels` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.addLabels`<a id="trellocardaddlabels"></a>

addCardsLabelsByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addLabelsResponse = await trello.card.addLabels({
  idCard: "idCard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### color: `string`<a id="color-string"></a>

A valid label color or null

##### name: `string`<a id="name-string"></a>

a string with a length from 0 to 16384

##### value: `string`<a id="value-string"></a>

all or a comma-separated list of: blue, green, orange, purple, red or yellow

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/labels` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.addMembers`<a id="trellocardaddmembers"></a>

addCardsIdMembersByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addMembersResponse = await trello.card.addMembers({
  idCard: "idCard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### value: `string`<a id="value-string"></a>

The id of the member to add to the card

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/idMembers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.addMembersVoted`<a id="trellocardaddmembersvoted"></a>

addCardsMembersVotedByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addMembersVotedResponse = await trello.card.addMembersVoted({
  idCard: "idCard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### value: `string`<a id="value-string"></a>

The id of the member to vote &#39;yes&#39; on the card

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/membersVoted` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.addStickersByIdCard`<a id="trellocardaddstickersbyidcard"></a>

addCardsStickersByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addStickersByIdCardResponse = await trello.card.addStickersByIdCard({
  idCard: "idCard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### image: `string`<a id="image-string"></a>

a string with a length from 0 to 16384

##### left: `string`<a id="left-string"></a>

undefined

##### rotate: `string`<a id="rotate-string"></a>

undefined

##### top: `string`<a id="top-string"></a>

undefined

##### zIndex: `string`<a id="zindex-string"></a>

Valid Z values for stickers, must be an integer

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/stickers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.convertCheckItemToCard`<a id="trellocardconvertcheckitemtocard"></a>

addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const convertCheckItemToCardResponse = await trello.card.convertCheckItemToCard(
  {
    idCard: "idCard_example",
    idChecklist: "idChecklist_example",
    idCheckItem: "idCheckItem_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

##### idCheckItem: `string`<a id="idcheckitem-string"></a>

idCheckItem

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/convertToCard` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.createAndUpdate`<a id="trellocardcreateandupdate"></a>

addCards()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createAndUpdateResponse = await trello.card.createAndUpdate({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### closed: `string`<a id="closed-string"></a>

 true or false

##### desc: `string`<a id="desc-string"></a>

a string with a length from 0 to 16384

##### due: `string`<a id="due-string"></a>

A date, or null

##### fileSource: `string`<a id="filesource-string"></a>

A file

##### idAttachmentCover: `string`<a id="idattachmentcover-string"></a>

Id of the image attachment of this card to use as its cover, or null for no cover

##### idBoard: `string`<a id="idboard-string"></a>

id of the board the card should be moved to

##### idCardSource: `string`<a id="idcardsource-string"></a>

The id of the card to copy into a new card.

##### idLabels: `string`<a id="idlabels-string"></a>

A comma-separated list of objectIds, 24-character hex strings

##### idList: `string`<a id="idlist-string"></a>

id of the list that the card should be added to

##### idMembers: `string`<a id="idmembers-string"></a>

A comma-separated list of objectIds, 24-character hex strings

##### keepFromSource: `string`<a id="keepfromsource-string"></a>

Properties of the card to copy over from the source.

##### labels: `string`<a id="labels-string"></a>

all or a comma-separated list of: blue, green, orange, purple, red or yellow

##### name: `string`<a id="name-string"></a>

The name of the new card.  It isn&#39;t required if the name is being copied from provided by a URL, file or card that is being copied.

##### pos: `string`<a id="pos-string"></a>

A position. top , bottom , or a positive number.

##### subscribed: `string`<a id="subscribed-string"></a>

 true or false

##### urlSource: `string`<a id="urlsource-string"></a>

A URL starting with http:// or https:// or null

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.deleteAttachmentsByIdCardByIdAttachment`<a id="trellocarddeleteattachmentsbyidcardbyidattachment"></a>

deleteCardsAttachmentsByIdCardByIdAttachment()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteAttachmentsByIdCardByIdAttachmentResponse =
  await trello.card.deleteAttachmentsByIdCardByIdAttachment({
    idCard: "idCard_example",
    idAttachment: "idAttachment_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### idAttachment: `string`<a id="idattachment-string"></a>

idAttachment

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/attachments/{idAttachment}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.deleteChecklistByIdCardByIdChecklist`<a id="trellocarddeletechecklistbyidcardbyidchecklist"></a>

deleteCardsChecklistsByIdCardByIdChecklist()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteChecklistByIdCardByIdChecklistResponse =
  await trello.card.deleteChecklistByIdCardByIdChecklist({
    idCard: "idCard_example",
    idChecklist: "idChecklist_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/checklists/{idChecklist}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.getAttachmentsByIdCard`<a id="trellocardgetattachmentsbyidcard"></a>

getCardsAttachmentsByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAttachmentsByIdCardResponse = await trello.card.getAttachmentsByIdCard(
  {
    idCard: "idCard_example",
    fields: "all",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url

##### filter: `string`<a id="filter-string"></a>

A boolean value or &quot;cover&quot; for only card cover attachments

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/attachments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.getAttachmentsByIds`<a id="trellocardgetattachmentsbyids"></a>

getCardsAttachmentsByIdCardByIdAttachment()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAttachmentsByIdsResponse = await trello.card.getAttachmentsByIds({
  idCard: "idCard_example",
  idAttachment: "idAttachment_example",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### idAttachment: `string`<a id="idattachment-string"></a>

idAttachment

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/attachments/{idAttachment}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.getBoardById`<a id="trellocardgetboardbyid"></a>

getCardsBoardByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoardByIdResponse = await trello.card.getBoardById({
  idCard: "idCard_example",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/board` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.getBoardByIdCardByField`<a id="trellocardgetboardbyidcardbyfield"></a>

getCardsBoardByIdCardByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoardByIdCardByFieldResponse =
  await trello.card.getBoardByIdCardByField({
    idCard: "idCard_example",
    field: "field_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/board/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.getById`<a id="trellocardgetbyid"></a>

getCardsByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await trello.card.getById({
  idCard: "idCard_example",
  actionsLimit: "50",
  actionFields: "all",
  actionMemberCreatorFields: "avatarHash, fullName, initials and username",
  attachmentFields: "all",
  memberFields: "avatarHash, fullName, initials and username",
  memberVotedFields: "avatarHash, fullName, initials and username",
  checkItemStateFields: "all",
  checklists: "none",
  checklistFields: "all",
  boardFields:
    "name, desc, descData, closed, idOrganization, pinned, url and prefs",
  listFields: "all",
  stickerFields: "all",
  fields:
    "badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl and url",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### actions: `string`<a id="actions-string"></a>

all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization

##### actionsEntities: `string`<a id="actionsentities-string"></a>

 true or false

##### actionsDisplay: `string`<a id="actionsdisplay-string"></a>

 true or false

##### actionsLimit: `string`<a id="actionslimit-string"></a>

a number from 0 to 1000

##### actionFields: `string`<a id="actionfields-string"></a>

all or a comma-separated list of: data, date, idMemberCreator or type

##### actionMemberCreatorFields: `string`<a id="actionmembercreatorfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### attachments: `string`<a id="attachments-string"></a>

A boolean value or &quot;cover&quot; for only card cover attachments

##### attachmentFields: `string`<a id="attachmentfields-string"></a>

all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url

##### members: `string`<a id="members-string"></a>

 true or false

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### membersVoted: `string`<a id="membersvoted-string"></a>

 true or false

##### memberVotedFields: `string`<a id="membervotedfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### checkItemStates: `string`<a id="checkitemstates-string"></a>

 true or false

##### checkItemStateFields: `string`<a id="checkitemstatefields-string"></a>

all or a comma-separated list of: idCheckItem or state

##### checklists: `string`<a id="checklists-string"></a>

One of: all or none

##### checklistFields: `string`<a id="checklistfields-string"></a>

all or a comma-separated list of: idBoard, idCard, name or pos

##### board: `string`<a id="board-string"></a>

 true or false

##### boardFields: `string`<a id="boardfields-string"></a>

all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

##### list: `string`<a id="list-string"></a>

 true or false

##### listFields: `string`<a id="listfields-string"></a>

all or a comma-separated list of: closed, idBoard, name, pos or subscribed

##### stickers: `string`<a id="stickers-string"></a>

 true or false

##### stickerFields: `string`<a id="stickerfields-string"></a>

all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.getByIdField`<a id="trellocardgetbyidfield"></a>

getCardsByIdCardByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdFieldResponse = await trello.card.getByIdField({
  idCard: "idCard_example",
  field: "field_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.getCardsListByIdCardByField`<a id="trellocardgetcardslistbyidcardbyfield"></a>

getCardsListByIdCardByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCardsListByIdCardByFieldResponse =
  await trello.card.getCardsListByIdCardByField({
    idCard: "idCard_example",
    field: "field_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/list/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.getCheckItemStatesById`<a id="trellocardgetcheckitemstatesbyid"></a>

getCardsCheckItemStatesByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCheckItemStatesByIdResponse = await trello.card.getCheckItemStatesById(
  {
    idCard: "idCard_example",
    fields: "all",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: idCheckItem or state

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/checkItemStates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.getChecklistsById`<a id="trellocardgetchecklistsbyid"></a>

getCardsChecklistsByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getChecklistsByIdResponse = await trello.card.getChecklistsById({
  idCard: "idCard_example",
  cards: "none",
  cardFields: "all",
  checkItems: "all",
  checkItemFields: "name, nameData, pos and state",
  filter: "all",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### cards: `string`<a id="cards-string"></a>

One of: all, closed, none, open or visible

##### cardFields: `string`<a id="cardfields-string"></a>

all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

##### checkItems: `string`<a id="checkitems-string"></a>

One of: all or none

##### checkItemFields: `string`<a id="checkitemfields-string"></a>

all or a comma-separated list of: name, nameData, pos, state or type

##### filter: `string`<a id="filter-string"></a>

One of: all or none

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: idBoard, idCard, name or pos

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/checklists` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.getListById`<a id="trellocardgetlistbyid"></a>

getCardsListByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListByIdResponse = await trello.card.getListById({
  idCard: "idCard_example",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: closed, idBoard, name, pos or subscribed

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.getMembersVotedByIdCard`<a id="trellocardgetmembersvotedbyidcard"></a>

getCardsMembersVotedByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMembersVotedByIdCardResponse =
  await trello.card.getMembersVotedByIdCard({
    idCard: "idCard_example",
    fields: "avatarHash, fullName, initials and username",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/membersVoted` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.getStickerByIds`<a id="trellocardgetstickerbyids"></a>

getCardsStickersByIdCardByIdSticker()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStickerByIdsResponse = await trello.card.getStickerByIds({
  idCard: "idCard_example",
  idSticker: "idSticker_example",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### idSticker: `string`<a id="idsticker-string"></a>

idSticker

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/stickers/{idSticker}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.getStickersByIdCard`<a id="trellocardgetstickersbyidcard"></a>

getCardsStickersByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStickersByIdCardResponse = await trello.card.getStickersByIdCard({
  idCard: "idCard_example",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/stickers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.listCardActionsById`<a id="trellocardlistcardactionsbyid"></a>

getCardsActionsByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCardActionsByIdResponse = await trello.card.listCardActionsById({
  idCard: "idCard_example",
  filter: "commentCard and updateCard:idList",
  fields: "all",
  limit: "50",
  format: "list",
  page: "0",
  memberFields: "avatarHash, fullName, initials and username",
  memberCreatorFields: "avatarHash, fullName, initials and username",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### entities: `string`<a id="entities-string"></a>

 true or false

##### display: `string`<a id="display-string"></a>

 true or false

##### filter: `string`<a id="filter-string"></a>

all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: data, date, idMemberCreator or type

##### limit: `string`<a id="limit-string"></a>

a number from 0 to 1000

##### format: `string`<a id="format-string"></a>

One of: count, list or minimal

##### since: `string`<a id="since-string"></a>

A date, null or lastView

##### before: `string`<a id="before-string"></a>

A date, or null

##### page: `string`<a id="page-string"></a>

Page * limit must be less than 1000

##### idModels: `string`<a id="idmodels-string"></a>

Only return actions related to these model ids

##### member: `string`<a id="member-string"></a>

 true or false

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### memberCreator: `string`<a id="membercreator-string"></a>

 true or false

##### memberCreatorFields: `string`<a id="membercreatorfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/actions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.listMembersByIdCard`<a id="trellocardlistmembersbyidcard"></a>

getCardsMembersByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMembersByIdCardResponse = await trello.card.listMembersByIdCard({
  idCard: "idCard_example",
  fields: "avatarHash, fullName, initials and username",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/members` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.markAssociatedNotificationsRead`<a id="trellocardmarkassociatednotificationsread"></a>

addCardsMarkAssociatedNotificationsReadByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const markAssociatedNotificationsReadResponse =
  await trello.card.markAssociatedNotificationsRead({
    idCard: "idCard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/markAssociatedNotificationsRead` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.removeActionCommentByIdCardByIdAction`<a id="trellocardremoveactioncommentbyidcardbyidaction"></a>

This can only be done by the original author of the comment, or someone with higher permissions than the original author.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeActionCommentByIdCardByIdActionResponse =
  await trello.card.removeActionCommentByIdCardByIdAction({
    idCard: "idCard_example",
    idAction: "idAction_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### idAction: `string`<a id="idaction-string"></a>

idAction

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/actions/{idAction}/comments` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.removeByIdCard`<a id="trellocardremovebyidcard"></a>

deleteCardsByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdCardResponse = await trello.card.removeByIdCard({
  idCard: "idCard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.removeChecklistCheckItem`<a id="trellocardremovechecklistcheckitem"></a>

deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeChecklistCheckItemResponse =
  await trello.card.removeChecklistCheckItem({
    idCard: "idCard_example",
    idChecklist: "idChecklist_example",
    idCheckItem: "idCheckItem_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

##### idCheckItem: `string`<a id="idcheckitem-string"></a>

idCheckItem

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.removeLabelByIdCardByIdLabel`<a id="trellocardremovelabelbyidcardbyidlabel"></a>

deleteCardsIdLabelsByIdCardByIdLabel()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeLabelByIdCardByIdLabelResponse =
  await trello.card.removeLabelByIdCardByIdLabel({
    idCard: "idCard_example",
    idLabel: "idLabel_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### idLabel: `string`<a id="idlabel-string"></a>

idLabel

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/idLabels/{idLabel}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.removeLabelsByIdCardByColor`<a id="trellocardremovelabelsbyidcardbycolor"></a>

deleteCardsLabelsByIdCardByColor()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeLabelsByIdCardByColorResponse =
  await trello.card.removeLabelsByIdCardByColor({
    idCard: "idCard_example",
    color: "color_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### color: `string`<a id="color-string"></a>

color

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/labels/{color}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.removeMemberByIdMember`<a id="trellocardremovememberbyidmember"></a>

deleteCardsIdMembersByIdCardByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeMemberByIdMemberResponse = await trello.card.removeMemberByIdMember(
  {
    idCard: "idCard_example",
    idMember: "idMember_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### idMember: `string`<a id="idmember-string"></a>

idMember

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/idMembers/{idMember}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.removeMembersVotedByIdCardByIdMember`<a id="trellocardremovemembersvotedbyidcardbyidmember"></a>

deleteCardsMembersVotedByIdCardByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeMembersVotedByIdCardByIdMemberResponse =
  await trello.card.removeMembersVotedByIdCardByIdMember({
    idCard: "idCard_example",
    idMember: "idMember_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### idMember: `string`<a id="idmember-string"></a>

idMember

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/membersVoted/{idMember}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.removeStickerByIds`<a id="trellocardremovestickerbyids"></a>

deleteCardsStickersByIdCardByIdSticker()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeStickerByIdsResponse = await trello.card.removeStickerByIds({
  idCard: "idCard_example",
  idSticker: "idSticker_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### idSticker: `string`<a id="idsticker-string"></a>

idSticker

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/stickers/{idSticker}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.updateActionCommentByIdCardByIdAction`<a id="trellocardupdateactioncommentbyidcardbyidaction"></a>

This can only be done by the original author of the comment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateActionCommentByIdCardByIdActionResponse =
  await trello.card.updateActionCommentByIdCardByIdAction({
    idCard: "idCard_example",
    idAction: "idAction_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### idAction: `string`<a id="idaction-string"></a>

idAction

##### text: `string`<a id="text-string"></a>

a string with a length from 1 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/actions/{idAction}/comments` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.updateAttachmentCoverByIdCard`<a id="trellocardupdateattachmentcoverbyidcard"></a>

updateCardsIdAttachmentCoverByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAttachmentCoverByIdCardResponse =
  await trello.card.updateAttachmentCoverByIdCard({
    idCard: "idCard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### value: `string`<a id="value-string"></a>

Id of the image attachment of this card to use as its cover, or null for no cover

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/idAttachmentCover` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.updateBoardByIdCard`<a id="trellocardupdateboardbyidcard"></a>

updateCardsIdBoardByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBoardByIdCardResponse = await trello.card.updateBoardByIdCard({
  idCard: "idCard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### idList: `string`<a id="idlist-string"></a>

id of the list that the card should be moved to on the new board

##### value: `string`<a id="value-string"></a>

id of the board the card should be moved to

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/idBoard` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.updateByIdCard`<a id="trellocardupdatebyidcard"></a>

updateCardsByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdCardResponse = await trello.card.updateByIdCard({
  idCard: "idCard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### closed: `string`<a id="closed-string"></a>

 true or false

##### desc: `string`<a id="desc-string"></a>

a string with a length from 0 to 16384

##### due: `string`<a id="due-string"></a>

A date, or null

##### fileSource: `string`<a id="filesource-string"></a>

A file

##### idAttachmentCover: `string`<a id="idattachmentcover-string"></a>

Id of the image attachment of this card to use as its cover, or null for no cover

##### idBoard: `string`<a id="idboard-string"></a>

id of the board the card should be moved to

##### idCardSource: `string`<a id="idcardsource-string"></a>

The id of the card to copy into a new card.

##### idLabels: `string`<a id="idlabels-string"></a>

A comma-separated list of objectIds, 24-character hex strings

##### idList: `string`<a id="idlist-string"></a>

id of the list that the card should be added to

##### idMembers: `string`<a id="idmembers-string"></a>

A comma-separated list of objectIds, 24-character hex strings

##### keepFromSource: `string`<a id="keepfromsource-string"></a>

Properties of the card to copy over from the source.

##### labels: `string`<a id="labels-string"></a>

all or a comma-separated list of: blue, green, orange, purple, red or yellow

##### name: `string`<a id="name-string"></a>

The name of the new card.  It isn&#39;t required if the name is being copied from provided by a URL, file or card that is being copied.

##### pos: `string`<a id="pos-string"></a>

A position. top , bottom , or a positive number.

##### subscribed: `string`<a id="subscribed-string"></a>

 true or false

##### urlSource: `string`<a id="urlsource-string"></a>

A URL starting with http:// or https:// or null

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.updateCheckItemPosById`<a id="trellocardupdatecheckitemposbyid"></a>

updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCheckItemPosByIdResponse = await trello.card.updateCheckItemPosById(
  {
    idCard: "idCard_example",
    idChecklist: "idChecklist_example",
    idCheckItem: "idCheckItem_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

##### idCheckItem: `string`<a id="idcheckitem-string"></a>

idCheckItem

##### value: `string`<a id="value-string"></a>

A position. top , bottom , or a positive number.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/pos` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.updateChecklistCheckItem`<a id="trellocardupdatechecklistcheckitem"></a>

updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateChecklistCheckItemResponse =
  await trello.card.updateChecklistCheckItem({
    idCard: "idCard_example",
    idChecklistCurrent: "idChecklistCurrent_example",
    idCheckItem: "idCheckItem_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### idChecklistCurrent: `string`<a id="idchecklistcurrent-string"></a>

idChecklistCurrent

##### idCheckItem: `string`<a id="idcheckitem-string"></a>

idCheckItem

##### idChecklist: `string`<a id="idchecklist-string"></a>

An id, or null

##### name: `string`<a id="name-string"></a>

a string with a length from 1 to 16384

##### pos: `string`<a id="pos-string"></a>

A position. top , bottom , or a positive number.

##### state: `string`<a id="state-string"></a>

One of: complete, false, incomplete or true

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/checklist/{idChecklistCurrent}/checkItem/{idCheckItem}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.updateChecklistCheckItemNameById`<a id="trellocardupdatechecklistcheckitemnamebyid"></a>

updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateChecklistCheckItemNameByIdResponse =
  await trello.card.updateChecklistCheckItemNameById({
    idCard: "idCard_example",
    idChecklist: "idChecklist_example",
    idCheckItem: "idCheckItem_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

##### idCheckItem: `string`<a id="idcheckitem-string"></a>

idCheckItem

##### value: `string`<a id="value-string"></a>

a string with a length from 1 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/name` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.updateChecklistCheckItemState`<a id="trellocardupdatechecklistcheckitemstate"></a>

updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateChecklistCheckItemStateResponse =
  await trello.card.updateChecklistCheckItemState({
    idCard: "idCard_example",
    idChecklist: "idChecklist_example",
    idCheckItem: "idCheckItem_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

##### idCheckItem: `string`<a id="idcheckitem-string"></a>

idCheckItem

##### value: `string`<a id="value-string"></a>

One of: complete, false, incomplete or true

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/state` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.updateClosedById`<a id="trellocardupdateclosedbyid"></a>

updateCardsClosedByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateClosedByIdResponse = await trello.card.updateClosedById({
  idCard: "idCard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### value: `string`<a id="value-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/closed` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.updateDescriptionByIdCard`<a id="trellocardupdatedescriptionbyidcard"></a>

updateCardsDescByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDescriptionByIdCardResponse =
  await trello.card.updateDescriptionByIdCard({
    idCard: "idCard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### value: `string`<a id="value-string"></a>

a string with a length from 0 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/desc` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.updateDueById`<a id="trellocardupdateduebyid"></a>

updateCardsDueByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDueByIdResponse = await trello.card.updateDueById({
  idCard: "idCard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### value: `string`<a id="value-string"></a>

A date, or null

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/due` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.updateIdListByIdCard`<a id="trellocardupdateidlistbyidcard"></a>

updateCardsIdListByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateIdListByIdCardResponse = await trello.card.updateIdListByIdCard({
  idCard: "idCard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### value: `string`<a id="value-string"></a>

id of the list the card should be moved to

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/idList` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.updateIdMembers`<a id="trellocardupdateidmembers"></a>

updateCardsIdMembersByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateIdMembersResponse = await trello.card.updateIdMembers({
  idCard: "idCard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### value: `string`<a id="value-string"></a>

The id of the member to add to the card

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/idMembers` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.updateLabels`<a id="trellocardupdatelabels"></a>

updateCardsLabelsByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateLabelsResponse = await trello.card.updateLabels({
  idCard: "idCard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### color: `string`<a id="color-string"></a>

A valid label color or null

##### name: `string`<a id="name-string"></a>

a string with a length from 0 to 16384

##### value: `string`<a id="value-string"></a>

all or a comma-separated list of: blue, green, orange, purple, red or yellow

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/labels` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.updateNameById`<a id="trellocardupdatenamebyid"></a>

updateCardsNameByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateNameByIdResponse = await trello.card.updateNameById({
  idCard: "idCard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### value: `string`<a id="value-string"></a>

a string with a length from 1 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/name` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.updatePosByIdCard`<a id="trellocardupdateposbyidcard"></a>

updateCardsPosByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePosByIdCardResponse = await trello.card.updatePosByIdCard({
  idCard: "idCard_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### value: `string`<a id="value-string"></a>

A position. top , bottom , or a positive number.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/pos` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.updateStickersByIdCardByIdSticker`<a id="trellocardupdatestickersbyidcardbyidsticker"></a>

updateCardsStickersByIdCardByIdSticker()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateStickersByIdCardByIdStickerResponse =
  await trello.card.updateStickersByIdCardByIdSticker({
    idCard: "idCard_example",
    idSticker: "idSticker_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### idSticker: `string`<a id="idsticker-string"></a>

idSticker

##### image: `string`<a id="image-string"></a>

a string with a length from 0 to 16384

##### left: `string`<a id="left-string"></a>

undefined

##### rotate: `string`<a id="rotate-string"></a>

undefined

##### top: `string`<a id="top-string"></a>

undefined

##### zIndex: `string`<a id="zindex-string"></a>

Valid Z values for stickers, must be an integer

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/stickers/{idSticker}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.card.updateSubscribedByIdCard`<a id="trellocardupdatesubscribedbyidcard"></a>

updateCardsSubscribedByIdCard()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSubscribedByIdCardResponse =
  await trello.card.updateSubscribedByIdCard({
    idCard: "idCard_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idCard: `string`<a id="idcard-string"></a>

card id or shortlink

##### value: `string`<a id="value-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cards/{idCard}/subscribed` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.checklist.addCheckItemsByIdChecklist`<a id="trellochecklistaddcheckitemsbyidchecklist"></a>

addChecklistsCheckItemsByIdChecklist()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addCheckItemsByIdChecklistResponse =
  await trello.checklist.addCheckItemsByIdChecklist({
    idChecklist: "idChecklist_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

##### checked: `string`<a id="checked-string"></a>

 true or false

##### name: `string`<a id="name-string"></a>

a string with a length from 1 to 16384

##### pos: `string`<a id="pos-string"></a>

A position. top , bottom , or a positive number.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checklists/{idChecklist}/checkItems` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.checklist.create`<a id="trellochecklistcreate"></a>

addChecklists()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createResponse = await trello.checklist.create({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

id of the board that the checklist should be added to

##### idCard: `string`<a id="idcard-string"></a>

id of the card that the checklist should be added to

##### idChecklistSource: `string`<a id="idchecklistsource-string"></a>

The id of the source checklist to copy into a new checklist.

##### name: `string`<a id="name-string"></a>

a string with a length from 0 to 16384

##### pos: `string`<a id="pos-string"></a>

A position. top , bottom , or a positive number.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checklists` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.checklist.getBoardByIdChecklist`<a id="trellochecklistgetboardbyidchecklist"></a>

getChecklistsBoardByIdChecklist()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoardByIdChecklistResponse =
  await trello.checklist.getBoardByIdChecklist({
    idChecklist: "idChecklist_example",
    fields: "all",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checklists/{idChecklist}/board` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.checklist.getBoardByIdChecklistByField`<a id="trellochecklistgetboardbyidchecklistbyfield"></a>

getChecklistsBoardByIdChecklistByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoardByIdChecklistByFieldResponse =
  await trello.checklist.getBoardByIdChecklistByField({
    idChecklist: "idChecklist_example",
    field: "field_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checklists/{idChecklist}/board/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.checklist.getById`<a id="trellochecklistgetbyid"></a>

getChecklistsByIdChecklist()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await trello.checklist.getById({
  idChecklist: "idChecklist_example",
  cards: "none",
  cardFields: "all",
  checkItems: "all",
  checkItemFields: "name, nameData, pos and state",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

##### cards: `string`<a id="cards-string"></a>

One of: all, closed, none, open or visible

##### cardFields: `string`<a id="cardfields-string"></a>

all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

##### checkItems: `string`<a id="checkitems-string"></a>

One of: all or none

##### checkItemFields: `string`<a id="checkitemfields-string"></a>

all or a comma-separated list of: name, nameData, pos, state or type

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: idBoard, idCard, name or pos

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checklists/{idChecklist}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.checklist.getByIdField`<a id="trellochecklistgetbyidfield"></a>

getChecklistsByIdChecklistByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdFieldResponse = await trello.checklist.getByIdField({
  idChecklist: "idChecklist_example",
  field: "field_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checklists/{idChecklist}/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.checklist.getCardsByFilter`<a id="trellochecklistgetcardsbyfilter"></a>

getChecklistsCardsByIdChecklistByFilter()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCardsByFilterResponse = await trello.checklist.getCardsByFilter({
  idChecklist: "idChecklist_example",
  filter: "filter_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

##### filter: `string`<a id="filter-string"></a>

filter

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checklists/{idChecklist}/cards/{filter}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.checklist.getCheckItemsByIdChecklist`<a id="trellochecklistgetcheckitemsbyidchecklist"></a>

getChecklistsCheckItemsByIdChecklist()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCheckItemsByIdChecklistResponse =
  await trello.checklist.getCheckItemsByIdChecklist({
    idChecklist: "idChecklist_example",
    filter: "all",
    fields: "name, nameData, pos and state",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

##### filter: `string`<a id="filter-string"></a>

One of: all or none

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: name, nameData, pos, state or type

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checklists/{idChecklist}/checkItems` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.checklist.getCheckItemsByIdChecklistByIdCheckItem`<a id="trellochecklistgetcheckitemsbyidchecklistbyidcheckitem"></a>

getChecklistsCheckItemsByIdChecklistByIdCheckItem()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCheckItemsByIdChecklistByIdCheckItemResponse =
  await trello.checklist.getCheckItemsByIdChecklistByIdCheckItem({
    idChecklist: "idChecklist_example",
    idCheckItem: "idCheckItem_example",
    fields: "name, nameData, pos and state",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

##### idCheckItem: `string`<a id="idcheckitem-string"></a>

idCheckItem

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: name, nameData, pos, state or type

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checklists/{idChecklist}/checkItems/{idCheckItem}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.checklist.listCardsByIdChecklist`<a id="trellochecklistlistcardsbyidchecklist"></a>

getChecklistsCardsByIdChecklist()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCardsByIdChecklistResponse =
  await trello.checklist.listCardsByIdChecklist({
    idChecklist: "idChecklist_example",
    attachmentFields: "all",
    memberFields: "avatarHash, fullName, initials and username",
    checklists: "none",
    filter: "open",
    fields: "all",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

##### actions: `string`<a id="actions-string"></a>

all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization

##### attachments: `string`<a id="attachments-string"></a>

A boolean value or &quot;cover&quot; for only card cover attachments

##### attachmentFields: `string`<a id="attachmentfields-string"></a>

all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url

##### stickers: `string`<a id="stickers-string"></a>

 true or false

##### members: `string`<a id="members-string"></a>

 true or false

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### checkItemStates: `string`<a id="checkitemstates-string"></a>

 true or false

##### checklists: `string`<a id="checklists-string"></a>

One of: all or none

##### limit: `string`<a id="limit-string"></a>

a number from 1 to 1000

##### since: `string`<a id="since-string"></a>

A date, or null

##### before: `string`<a id="before-string"></a>

A date, or null

##### filter: `string`<a id="filter-string"></a>

One of: all, closed, none or open

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checklists/{idChecklist}/cards` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.checklist.removeById`<a id="trellochecklistremovebyid"></a>

deleteChecklistsByIdChecklist()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdResponse = await trello.checklist.removeById({
  idChecklist: "idChecklist_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checklists/{idChecklist}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.checklist.removeByIdCheckItem`<a id="trellochecklistremovebyidcheckitem"></a>

deleteChecklistsCheckItemsByIdChecklistByIdCheckItem()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdCheckItemResponse = await trello.checklist.removeByIdCheckItem({
  idChecklist: "idChecklist_example",
  idCheckItem: "idCheckItem_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

##### idCheckItem: `string`<a id="idcheckitem-string"></a>

idCheckItem

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checklists/{idChecklist}/checkItems/{idCheckItem}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.checklist.updateByIdChecklist`<a id="trellochecklistupdatebyidchecklist"></a>

updateChecklistsByIdChecklist()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdChecklistResponse = await trello.checklist.updateByIdChecklist({
  idChecklist: "idChecklist_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

##### idBoard: `string`<a id="idboard-string"></a>

id of the board that the checklist should be added to

##### idCard: `string`<a id="idcard-string"></a>

id of the card that the checklist should be added to

##### idChecklistSource: `string`<a id="idchecklistsource-string"></a>

The id of the source checklist to copy into a new checklist.

##### name: `string`<a id="name-string"></a>

a string with a length from 0 to 16384

##### pos: `string`<a id="pos-string"></a>

A position. top , bottom , or a positive number.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checklists/{idChecklist}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.checklist.updateIdCardByIdChecklist`<a id="trellochecklistupdateidcardbyidchecklist"></a>

updateChecklistsIdCardByIdChecklist()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateIdCardByIdChecklistResponse =
  await trello.checklist.updateIdCardByIdChecklist({
    idChecklist: "idChecklist_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

##### value: `string`<a id="value-string"></a>

The id of the card that the checklist is on

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checklists/{idChecklist}/idCard` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.checklist.updateNameByIdChecklist`<a id="trellochecklistupdatenamebyidchecklist"></a>

updateChecklistsNameByIdChecklist()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateNameByIdChecklistResponse =
  await trello.checklist.updateNameByIdChecklist({
    idChecklist: "idChecklist_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

##### value: `string`<a id="value-string"></a>

a string with a length from 1 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checklists/{idChecklist}/name` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.checklist.updatePosByIdChecklist`<a id="trellochecklistupdateposbyidchecklist"></a>

updateChecklistsPosByIdChecklist()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePosByIdChecklistResponse =
  await trello.checklist.updatePosByIdChecklist({
    idChecklist: "idChecklist_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idChecklist: `string`<a id="idchecklist-string"></a>

idChecklist

##### value: `string`<a id="value-string"></a>

A position. top , bottom , or a positive number.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checklists/{idChecklist}/pos` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.label.createLabels`<a id="trellolabelcreatelabels"></a>

addLabels()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createLabelsResponse = await trello.label.createLabels({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### color: `string`<a id="color-string"></a>

A valid label color or null

##### idBoard: `string`<a id="idboard-string"></a>

An id

##### name: `string`<a id="name-string"></a>

a string with a length from 0 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/labels` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.label.getBoardByIdLabel`<a id="trellolabelgetboardbyidlabel"></a>

getLabelsBoardByIdLabel()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoardByIdLabelResponse = await trello.label.getBoardByIdLabel({
  idLabel: "idLabel_example",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idLabel: `string`<a id="idlabel-string"></a>

idLabel

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/labels/{idLabel}/board` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.label.getBoardByIdLabelByField`<a id="trellolabelgetboardbyidlabelbyfield"></a>

getLabelsBoardByIdLabelByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoardByIdLabelByFieldResponse =
  await trello.label.getBoardByIdLabelByField({
    idLabel: "idLabel_example",
    field: "field_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idLabel: `string`<a id="idlabel-string"></a>

idLabel

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/labels/{idLabel}/board/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.label.getByIdLabel`<a id="trellolabelgetbyidlabel"></a>

getLabelsByIdLabel()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdLabelResponse = await trello.label.getByIdLabel({
  idLabel: "idLabel_example",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idLabel: `string`<a id="idlabel-string"></a>

idLabel

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: color, idBoard, name or uses

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/labels/{idLabel}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.label.removeByIdLabel`<a id="trellolabelremovebyidlabel"></a>

deleteLabelsByIdLabel()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdLabelResponse = await trello.label.removeByIdLabel({
  idLabel: "idLabel_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idLabel: `string`<a id="idlabel-string"></a>

idLabel

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/labels/{idLabel}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.label.updateByIdLabel`<a id="trellolabelupdatebyidlabel"></a>

updateLabelsByIdLabel()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdLabelResponse = await trello.label.updateByIdLabel({
  idLabel: "idLabel_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idLabel: `string`<a id="idlabel-string"></a>

idLabel

##### color: `string`<a id="color-string"></a>

A valid label color or null

##### idBoard: `string`<a id="idboard-string"></a>

An id

##### name: `string`<a id="name-string"></a>

a string with a length from 0 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/labels/{idLabel}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.label.updateColorByIdLabel`<a id="trellolabelupdatecolorbyidlabel"></a>

updateLabelsColorByIdLabel()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateColorByIdLabelResponse = await trello.label.updateColorByIdLabel({
  idLabel: "idLabel_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idLabel: `string`<a id="idlabel-string"></a>

idLabel

##### value: `string`<a id="value-string"></a>

A valid label color or null

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/labels/{idLabel}/color` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.label.updateNameByIdLabel`<a id="trellolabelupdatenamebyidlabel"></a>

updateLabelsNameByIdLabel()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateNameByIdLabelResponse = await trello.label.updateNameByIdLabel({
  idLabel: "idLabel_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idLabel: `string`<a id="idlabel-string"></a>

idLabel

##### value: `string`<a id="value-string"></a>

a string with a length from 0 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/labels/{idLabel}/name` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.list.archiveAllCardsByIdList`<a id="trellolistarchiveallcardsbyidlist"></a>

addListsArchiveAllCardsByIdList()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const archiveAllCardsByIdListResponse =
  await trello.list.archiveAllCardsByIdList({
    idList: "idList_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idList: `string`<a id="idlist-string"></a>

idList

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{idList}/archiveAllCards` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.list.createCardsByIdList`<a id="trellolistcreatecardsbyidlist"></a>

addListsCardsByIdList()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCardsByIdListResponse = await trello.list.createCardsByIdList({
  idList: "idList_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idList: `string`<a id="idlist-string"></a>

idList

##### desc: `string`<a id="desc-string"></a>

a string with a length from 0 to 16384

##### due: `string`<a id="due-string"></a>

A date, or null

##### idMembers: `string`<a id="idmembers-string"></a>

A comma-separated list of objectIds, 24-character hex strings

##### labels: `string`<a id="labels-string"></a>

all or a comma-separated list of: blue, green, orange, purple, red or yellow

##### name: `string`<a id="name-string"></a>

a string with a length from 1 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{idList}/cards` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.list.createList`<a id="trellolistcreatelist"></a>

addLists()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createListResponse = await trello.list.createList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### closed: `string`<a id="closed-string"></a>

 true or false

##### idBoard: `string`<a id="idboard-string"></a>

id of the board that the list should be added to

##### idListSource: `string`<a id="idlistsource-string"></a>

The id of the list to copy into a new list.

##### name: `string`<a id="name-string"></a>

a string with a length from 1 to 16384

##### pos: `string`<a id="pos-string"></a>

A position. top , bottom , or a positive number.

##### subscribed: `string`<a id="subscribed-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.list.getActionsByIdList`<a id="trellolistgetactionsbyidlist"></a>

getListsActionsByIdList()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getActionsByIdListResponse = await trello.list.getActionsByIdList({
  idList: "idList_example",
  filter: "all",
  fields: "all",
  limit: "50",
  format: "list",
  page: "0",
  memberFields: "avatarHash, fullName, initials and username",
  memberCreatorFields: "avatarHash, fullName, initials and username",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idList: `string`<a id="idlist-string"></a>

idList

##### entities: `string`<a id="entities-string"></a>

 true or false

##### display: `string`<a id="display-string"></a>

 true or false

##### filter: `string`<a id="filter-string"></a>

all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: data, date, idMemberCreator or type

##### limit: `string`<a id="limit-string"></a>

a number from 0 to 1000

##### format: `string`<a id="format-string"></a>

One of: count, list or minimal

##### since: `string`<a id="since-string"></a>

A date, null or lastView

##### before: `string`<a id="before-string"></a>

A date, or null

##### page: `string`<a id="page-string"></a>

Page * limit must be less than 1000

##### idModels: `string`<a id="idmodels-string"></a>

Only return actions related to these model ids

##### member: `string`<a id="member-string"></a>

 true or false

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### memberCreator: `string`<a id="membercreator-string"></a>

 true or false

##### memberCreatorFields: `string`<a id="membercreatorfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{idList}/actions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.list.getBoardByIdListByField`<a id="trellolistgetboardbyidlistbyfield"></a>

getListsBoardByIdListByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoardByIdListByFieldResponse =
  await trello.list.getBoardByIdListByField({
    idList: "idList_example",
    field: "field_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idList: `string`<a id="idlist-string"></a>

idList

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{idList}/board/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.list.getByIdList`<a id="trellolistgetbyidlist"></a>

getListsByIdList()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdListResponse = await trello.list.getByIdList({
  idList: "idList_example",
  cards: "none",
  cardFields: "all",
  boardFields:
    "name, desc, descData, closed, idOrganization, pinned, url and prefs",
  fields: "name, closed, idBoard and pos",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idList: `string`<a id="idlist-string"></a>

idList

##### cards: `string`<a id="cards-string"></a>

One of: all, closed, none or open

##### cardFields: `string`<a id="cardfields-string"></a>

all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

##### board: `string`<a id="board-string"></a>

 true or false

##### boardFields: `string`<a id="boardfields-string"></a>

all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: closed, idBoard, name, pos or subscribed

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{idList}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.list.getByIdListByField`<a id="trellolistgetbyidlistbyfield"></a>

getListsByIdListByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdListByFieldResponse = await trello.list.getByIdListByField({
  idList: "idList_example",
  field: "field_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idList: `string`<a id="idlist-string"></a>

idList

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{idList}/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.list.getCardsByFilter`<a id="trellolistgetcardsbyfilter"></a>

getListsCardsByIdListByFilter()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCardsByFilterResponse = await trello.list.getCardsByFilter({
  idList: "idList_example",
  filter: "filter_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idList: `string`<a id="idlist-string"></a>

idList

##### filter: `string`<a id="filter-string"></a>

filter

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{idList}/cards/{filter}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.list.getCardsByIdList`<a id="trellolistgetcardsbyidlist"></a>

getListsCardsByIdList()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCardsByIdListResponse = await trello.list.getCardsByIdList({
  idList: "idList_example",
  attachmentFields: "all",
  memberFields: "avatarHash, fullName, initials and username",
  checklists: "none",
  filter: "open",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idList: `string`<a id="idlist-string"></a>

idList

##### actions: `string`<a id="actions-string"></a>

all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization

##### attachments: `string`<a id="attachments-string"></a>

A boolean value or &quot;cover&quot; for only card cover attachments

##### attachmentFields: `string`<a id="attachmentfields-string"></a>

all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url

##### stickers: `string`<a id="stickers-string"></a>

 true or false

##### members: `string`<a id="members-string"></a>

 true or false

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### checkItemStates: `string`<a id="checkitemstates-string"></a>

 true or false

##### checklists: `string`<a id="checklists-string"></a>

One of: all or none

##### limit: `string`<a id="limit-string"></a>

a number from 1 to 1000

##### since: `string`<a id="since-string"></a>

A date, or null

##### before: `string`<a id="before-string"></a>

A date, or null

##### filter: `string`<a id="filter-string"></a>

One of: all, closed, none or open

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{idList}/cards` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.list.idBoardGet`<a id="trellolistidboardget"></a>

getListsBoardByIdList()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const idBoardGetResponse = await trello.list.idBoardGet({
  idList: "idList_example",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idList: `string`<a id="idlist-string"></a>

idList

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{idList}/board` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.list.moveAllCardsByIdList`<a id="trellolistmoveallcardsbyidlist"></a>

addListsMoveAllCardsByIdList()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const moveAllCardsByIdListResponse = await trello.list.moveAllCardsByIdList({
  idList: "idList_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idList: `string`<a id="idlist-string"></a>

idList

##### idBoard: `string`<a id="idboard-string"></a>

id of the board that the cards should be moved to

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{idList}/moveAllCards` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.list.updateByIdList`<a id="trellolistupdatebyidlist"></a>

updateListsByIdList()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdListResponse = await trello.list.updateByIdList({
  idList: "idList_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idList: `string`<a id="idlist-string"></a>

idList

##### closed: `string`<a id="closed-string"></a>

 true or false

##### idBoard: `string`<a id="idboard-string"></a>

id of the board that the list should be added to

##### idListSource: `string`<a id="idlistsource-string"></a>

The id of the list to copy into a new list.

##### name: `string`<a id="name-string"></a>

a string with a length from 1 to 16384

##### pos: `string`<a id="pos-string"></a>

A position. top , bottom , or a positive number.

##### subscribed: `string`<a id="subscribed-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{idList}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.list.updateClosedByIdList`<a id="trellolistupdateclosedbyidlist"></a>

updateListsClosedByIdList()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateClosedByIdListResponse = await trello.list.updateClosedByIdList({
  idList: "idList_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idList: `string`<a id="idlist-string"></a>

idList

##### value: `string`<a id="value-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{idList}/closed` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.list.updateIdBoardByIdList`<a id="trellolistupdateidboardbyidlist"></a>

updateListsIdBoardByIdList()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateIdBoardByIdListResponse = await trello.list.updateIdBoardByIdList({
  idList: "idList_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idList: `string`<a id="idlist-string"></a>

idList

##### pos: `string`<a id="pos-string"></a>

position of the list on the new board

##### value: `string`<a id="value-string"></a>

id of the board the list should be moved to

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{idList}/idBoard` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.list.updateNameByIdList`<a id="trellolistupdatenamebyidlist"></a>

updateListsNameByIdList()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateNameByIdListResponse = await trello.list.updateNameByIdList({
  idList: "idList_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idList: `string`<a id="idlist-string"></a>

idList

##### value: `string`<a id="value-string"></a>

a string with a length from 1 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{idList}/name` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.list.updatePosByIdList`<a id="trellolistupdateposbyidlist"></a>

updateListsPosByIdList()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePosByIdListResponse = await trello.list.updatePosByIdList({
  idList: "idList_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idList: `string`<a id="idlist-string"></a>

idList

##### value: `string`<a id="value-string"></a>

A position. top , bottom , or a positive number.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{idList}/pos` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.list.updateSubscribedByIdList`<a id="trellolistupdatesubscribedbyidlist"></a>

updateListsSubscribedByIdList()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSubscribedByIdListResponse =
  await trello.list.updateSubscribedByIdList({
    idList: "idList_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idList: `string`<a id="idlist-string"></a>

idList

##### value: `string`<a id="value-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{idList}/subscribed` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.addBoardBackgrounds`<a id="trellomemberaddboardbackgrounds"></a>

addMembersBoardBackgroundsByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addBoardBackgroundsResponse = await trello.member.addBoardBackgrounds({
  idMember: "idMember_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### brightness: `string`<a id="brightness-string"></a>

One of: dark, light or unknown

##### file: `string`<a id="file-string"></a>

A file

##### tile: `string`<a id="tile-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/boardBackgrounds` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.addBoardStarsByIdMember`<a id="trellomemberaddboardstarsbyidmember"></a>

addMembersBoardStarsByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addBoardStarsByIdMemberResponse =
  await trello.member.addBoardStarsByIdMember({
    idMember: "idMember_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### idBoard: `string`<a id="idboard-string"></a>

The id of the board to star

##### pos: `string`<a id="pos-string"></a>

A position. top , bottom , or a positive number.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/boardStars` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.addCustomBoardBackgrounds`<a id="trellomemberaddcustomboardbackgrounds"></a>

addMembersCustomBoardBackgroundsByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addCustomBoardBackgroundsResponse =
  await trello.member.addCustomBoardBackgrounds({
    idMember: "idMember_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### brightness: `string`<a id="brightness-string"></a>

One of: dark, light or unknown

##### file: `string`<a id="file-string"></a>

A file

##### tile: `string`<a id="tile-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/customBoardBackgrounds` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.addCustomEmojiByIdMember`<a id="trellomemberaddcustomemojibyidmember"></a>

addMembersCustomEmojiByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addCustomEmojiByIdMemberResponse =
  await trello.member.addCustomEmojiByIdMember({
    idMember: "idMember_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### file: `string`<a id="file-string"></a>

A file

##### name: `string`<a id="name-string"></a>

a string with a length from 2 to 64

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/customEmoji` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.addCustomStickers`<a id="trellomemberaddcustomstickers"></a>

addMembersCustomStickersByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addCustomStickersResponse = await trello.member.addCustomStickers({
  idMember: "idMember_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### file: `string`<a id="file-string"></a>

A file

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/customStickers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.addOneTimeMessagesDismissedByIdMember`<a id="trellomemberaddonetimemessagesdismissedbyidmember"></a>

addMembersOneTimeMessagesDismissedByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addOneTimeMessagesDismissedByIdMemberResponse =
  await trello.member.addOneTimeMessagesDismissedByIdMember({
    idMember: "idMember_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### value: `string`<a id="value-string"></a>

Type of message dismissed

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/oneTimeMessagesDismissed` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.createSavedSearch`<a id="trellomembercreatesavedsearch"></a>

addMembersSavedSearchesByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSavedSearchResponse = await trello.member.createSavedSearch({
  idMember: "idMember_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### name: `string`<a id="name-string"></a>

A non-empty string with at least one non-space character

##### pos: `string`<a id="pos-string"></a>

A position. top , bottom , or a positive number.

##### query: `string`<a id="query-string"></a>

a string with a length from 1 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/savedSearches` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.deleteBoardBackground`<a id="trellomemberdeleteboardbackground"></a>

deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteBoardBackgroundResponse = await trello.member.deleteBoardBackground(
  {
    idMember: "idMember_example",
    idBoardBackground: "idBoardBackground_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### idBoardBackground: `string`<a id="idboardbackground-string"></a>

idBoardBackground

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/boardBackgrounds/{idBoardBackground}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getBoardBackgroundByIds`<a id="trellomembergetboardbackgroundbyids"></a>

getMembersBoardBackgroundsByIdMemberByIdBoardBackground()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoardBackgroundByIdsResponse =
  await trello.member.getBoardBackgroundByIds({
    idMember: "idMember_example",
    idBoardBackground: "idBoardBackground_example",
    fields: "all",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### idBoardBackground: `string`<a id="idboardbackground-string"></a>

idBoardBackground

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/boardBackgrounds/{idBoardBackground}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getBoardBackgroundsById`<a id="trellomembergetboardbackgroundsbyid"></a>

getMembersBoardBackgroundsByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoardBackgroundsByIdResponse =
  await trello.member.getBoardBackgroundsById({
    idMember: "idMember_example",
    filter: "all",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### filter: `string`<a id="filter-string"></a>

One of: all, custom, default, none or premium

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/boardBackgrounds` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getBoardStarByIdMember`<a id="trellomembergetboardstarbyidmember"></a>

getMembersBoardStarsByIdMemberByIdBoardStar()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoardStarByIdMemberResponse =
  await trello.member.getBoardStarByIdMember({
    idMember: "idMember_example",
    idBoardStar: "idBoardStar_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### idBoardStar: `string`<a id="idboardstar-string"></a>

idBoardStar

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/boardStars/{idBoardStar}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getBoardStarsById`<a id="trellomembergetboardstarsbyid"></a>

getMembersBoardStarsByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoardStarsByIdResponse = await trello.member.getBoardStarsById({
  idMember: "idMember_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/boardStars` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getBoards`<a id="trellomembergetboards"></a>

getMembersBoardsByIdMemberByFilter()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoardsResponse = await trello.member.getBoards({
  idMember: "idMember_example",
  filter: "filter_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### filter: `string`<a id="filter-string"></a>

filter

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/boards/{filter}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getBoardsByIdMember`<a id="trellomembergetboardsbyidmember"></a>

getMembersBoardsByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoardsByIdMemberResponse = await trello.member.getBoardsByIdMember({
  idMember: "idMember_example",
  filter: "all",
  fields: "all",
  actionsLimit: "50",
  actionsFormat: "list",
  actionFields: "all",
  memberships: "none",
  organizationFields: "name and displayName",
  lists: "none",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### filter: `string`<a id="filter-string"></a>

all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

##### actions: `string`<a id="actions-string"></a>

all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization

##### actionsEntities: `string`<a id="actionsentities-string"></a>

 true or false

##### actionsLimit: `string`<a id="actionslimit-string"></a>

a number from 0 to 1000

##### actionsFormat: `string`<a id="actionsformat-string"></a>

One of: count, list or minimal

##### actionsSince: `string`<a id="actionssince-string"></a>

A date, null or lastView

##### actionFields: `string`<a id="actionfields-string"></a>

all or a comma-separated list of: data, date, idMemberCreator or type

##### memberships: `string`<a id="memberships-string"></a>

all or a comma-separated list of: active, admin, deactivated, me or normal

##### organization: `string`<a id="organization-string"></a>

 true or false

##### organizationFields: `string`<a id="organizationfields-string"></a>

all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website

##### lists: `string`<a id="lists-string"></a>

One of: all, closed, none or open

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/boards` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getBoardsInvitedByIdMemberByField`<a id="trellomembergetboardsinvitedbyidmemberbyfield"></a>

getMembersBoardsInvitedByIdMemberByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoardsInvitedByIdMemberByFieldResponse =
  await trello.member.getBoardsInvitedByIdMemberByField({
    idMember: "idMember_example",
    field: "field_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/boardsInvited/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getByField`<a id="trellomembergetbyfield"></a>

getMembersByIdMemberByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByFieldResponse = await trello.member.getByField({
  idMember: "idMember_example",
  field: "field_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getById`<a id="trellomembergetbyid"></a>

If you specify 'me' as the username, this call will respond as if you had supplied the username associated with the supplied token

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await trello.member.getById({
  idMember: "idMember_example",
  actionsLimit: "50",
  actionFields: "all",
  cards: "none",
  cardFields: "all",
  cardMemberFields: "avatarHash, fullName, initials and username",
  cardAttachmentFields: "url and previews",
  boardFields: "name, closed, idOrganization and pinned",
  boardActionsFormat: "list",
  boardActionsLimit: "50",
  boardActionFields: "all",
  boardLists: "none",
  boardMemberships: "none",
  boardOrganizationFields: "name and displayName",
  boardsInvitedFields: "name, closed, idOrganization and pinned",
  organizations: "none",
  organizationFields: "all",
  organizationsInvited: "none",
  organizationsInvitedFields: "all",
  notificationsLimit: "50",
  notificationFields: "all",
  notificationMemberCreatorFields:
    "avatarHash, fullName, initials and username",
  tokens: "none",
  boardBackgrounds: "none",
  customBoardBackgrounds: "none",
  customStickers: "none",
  customEmoji: "none",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### actions: `string`<a id="actions-string"></a>

all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization

##### actionsEntities: `string`<a id="actionsentities-string"></a>

 true or false

##### actionsDisplay: `string`<a id="actionsdisplay-string"></a>

 true or false

##### actionsLimit: `string`<a id="actionslimit-string"></a>

a number from 0 to 1000

##### actionFields: `string`<a id="actionfields-string"></a>

all or a comma-separated list of: data, date, idMemberCreator or type

##### actionSince: `string`<a id="actionsince-string"></a>

A date, null or lastView

##### actionBefore: `string`<a id="actionbefore-string"></a>

A date, or null

##### cards: `string`<a id="cards-string"></a>

One of: all, closed, none, open or visible

##### cardFields: `string`<a id="cardfields-string"></a>

all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

##### cardMembers: `string`<a id="cardmembers-string"></a>

 true or false

##### cardMemberFields: `string`<a id="cardmemberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### cardAttachments: `string`<a id="cardattachments-string"></a>

A boolean value or &quot;cover&quot; for only card cover attachments

##### cardAttachmentFields: `string`<a id="cardattachmentfields-string"></a>

all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url

##### cardStickers: `string`<a id="cardstickers-string"></a>

 true or false

##### boards: `string`<a id="boards-string"></a>

all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned

##### boardFields: `string`<a id="boardfields-string"></a>

all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

##### boardActions: `string`<a id="boardactions-string"></a>

all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization

##### boardActionsEntities: `string`<a id="boardactionsentities-string"></a>

 true or false

##### boardActionsDisplay: `string`<a id="boardactionsdisplay-string"></a>

 true or false

##### boardActionsFormat: `string`<a id="boardactionsformat-string"></a>

One of: count, list or minimal

##### boardActionsSince: `string`<a id="boardactionssince-string"></a>

A date, null or lastView

##### boardActionsLimit: `string`<a id="boardactionslimit-string"></a>

a number from 0 to 1000

##### boardActionFields: `string`<a id="boardactionfields-string"></a>

all or a comma-separated list of: data, date, idMemberCreator or type

##### boardLists: `string`<a id="boardlists-string"></a>

One of: all, closed, none or open

##### boardMemberships: `string`<a id="boardmemberships-string"></a>

all or a comma-separated list of: active, admin, deactivated, me or normal

##### boardOrganization: `string`<a id="boardorganization-string"></a>

 true or false

##### boardOrganizationFields: `string`<a id="boardorganizationfields-string"></a>

all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website

##### boardsInvited: `string`<a id="boardsinvited-string"></a>

all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned

##### boardsInvitedFields: `string`<a id="boardsinvitedfields-string"></a>

all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

##### boardStars: `string`<a id="boardstars-string"></a>

 true or false

##### savedSearches: `string`<a id="savedsearches-string"></a>

 true or false

##### organizations: `string`<a id="organizations-string"></a>

One of: all, members, none or public

##### organizationFields: `string`<a id="organizationfields-string"></a>

all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website

##### organizationPaidAccount: `string`<a id="organizationpaidaccount-string"></a>

 true or false

##### organizationsInvited: `string`<a id="organizationsinvited-string"></a>

One of: all, members, none or public

##### organizationsInvitedFields: `string`<a id="organizationsinvitedfields-string"></a>

all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website

##### notifications: `string`<a id="notifications-string"></a>

all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard

##### notificationsEntities: `string`<a id="notificationsentities-string"></a>

 true or false

##### notificationsDisplay: `string`<a id="notificationsdisplay-string"></a>

 true or false

##### notificationsLimit: `string`<a id="notificationslimit-string"></a>

a number from 1 to 1000

##### notificationFields: `string`<a id="notificationfields-string"></a>

all or a comma-separated list of: data, date, idMemberCreator, type or unread

##### notificationMemberCreator: `string`<a id="notificationmembercreator-string"></a>

 true or false

##### notificationMemberCreatorFields: `string`<a id="notificationmembercreatorfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### notificationBefore: `string`<a id="notificationbefore-string"></a>

An id, or null

##### notificationSince: `string`<a id="notificationsince-string"></a>

An id, or null

##### tokens: `string`<a id="tokens-string"></a>

One of: all or none

##### paidAccount: `string`<a id="paidaccount-string"></a>

 true or false

##### boardBackgrounds: `string`<a id="boardbackgrounds-string"></a>

One of: all, custom, default, none or premium

##### customBoardBackgrounds: `string`<a id="customboardbackgrounds-string"></a>

One of: all or none

##### customStickers: `string`<a id="customstickers-string"></a>

One of: all or none

##### customEmoji: `string`<a id="customemoji-string"></a>

One of: all or none

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getCardsByFilter`<a id="trellomembergetcardsbyfilter"></a>

getMembersCardsByIdMemberByFilter()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCardsByFilterResponse = await trello.member.getCardsByFilter({
  idMember: "idMember_example",
  filter: "filter_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### filter: `string`<a id="filter-string"></a>

filter

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/cards/{filter}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getCardsByIdMember`<a id="trellomembergetcardsbyidmember"></a>

getMembersCardsByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCardsByIdMemberResponse = await trello.member.getCardsByIdMember({
  idMember: "idMember_example",
  attachmentFields: "all",
  memberFields: "avatarHash, fullName, initials and username",
  checklists: "none",
  filter: "visible",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### actions: `string`<a id="actions-string"></a>

all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization

##### attachments: `string`<a id="attachments-string"></a>

A boolean value or &quot;cover&quot; for only card cover attachments

##### attachmentFields: `string`<a id="attachmentfields-string"></a>

all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url

##### stickers: `string`<a id="stickers-string"></a>

 true or false

##### members: `string`<a id="members-string"></a>

 true or false

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### checkItemStates: `string`<a id="checkitemstates-string"></a>

 true or false

##### checklists: `string`<a id="checklists-string"></a>

One of: all or none

##### limit: `string`<a id="limit-string"></a>

a number from 1 to 1000

##### since: `string`<a id="since-string"></a>

A date, or null

##### before: `string`<a id="before-string"></a>

A date, or null

##### filter: `string`<a id="filter-string"></a>

One of: all, closed, none, open or visible

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/cards` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getCustomBoardBackgroundByIds`<a id="trellomembergetcustomboardbackgroundbyids"></a>

getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomBoardBackgroundByIdsResponse =
  await trello.member.getCustomBoardBackgroundByIds({
    idMember: "idMember_example",
    idBoardBackground: "idBoardBackground_example",
    fields: "all",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### idBoardBackground: `string`<a id="idboardbackground-string"></a>

idBoardBackground

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/customBoardBackgrounds/{idBoardBackground}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getCustomBoardBackgroundsById`<a id="trellomembergetcustomboardbackgroundsbyid"></a>

getMembersCustomBoardBackgroundsByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomBoardBackgroundsByIdResponse =
  await trello.member.getCustomBoardBackgroundsById({
    idMember: "idMember_example",
    filter: "all",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### filter: `string`<a id="filter-string"></a>

One of: all or none

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/customBoardBackgrounds` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getCustomEmojiByIds`<a id="trellomembergetcustomemojibyids"></a>

getMembersCustomEmojiByIdMemberByIdCustomEmoji()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomEmojiByIdsResponse = await trello.member.getCustomEmojiByIds({
  idMember: "idMember_example",
  idCustomEmoji: "idCustomEmoji_example",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### idCustomEmoji: `string`<a id="idcustomemoji-string"></a>

idCustomEmoji

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: name or url

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/customEmoji/{idCustomEmoji}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getCustomStickerByIds`<a id="trellomembergetcustomstickerbyids"></a>

getMembersCustomStickersByIdMemberByIdCustomSticker()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomStickerByIdsResponse = await trello.member.getCustomStickerByIds(
  {
    idMember: "idMember_example",
    idCustomSticker: "idCustomSticker_example",
    fields: "all",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### idCustomSticker: `string`<a id="idcustomsticker-string"></a>

idCustomSticker

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: scaled or url

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/customStickers/{idCustomSticker}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getCustomStickersByIdMember`<a id="trellomembergetcustomstickersbyidmember"></a>

This gets a list of all of the user’s uploaded stickers

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomStickersByIdMemberResponse =
  await trello.member.getCustomStickersByIdMember({
    idMember: "idMember_example",
    filter: "all",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### filter: `string`<a id="filter-string"></a>

One of: all or none

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/customStickers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getDeltasByIdMember`<a id="trellomembergetdeltasbyidmember"></a>

getMembersDeltasByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDeltasByIdMemberResponse = await trello.member.getDeltasByIdMember({
  idMember: "idMember_example",
  tags: "tags_example",
  ixLastUpdate: "ixLastUpdate_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### tags: `string`<a id="tags-string"></a>

A valid tag for subscribing

##### ixLastUpdate: `string`<a id="ixlastupdate-string"></a>

a number from -1 to Infinity

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/deltas` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getInvitedBoards`<a id="trellomembergetinvitedboards"></a>

getMembersBoardsInvitedByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInvitedBoardsResponse = await trello.member.getInvitedBoards({
  idMember: "idMember_example",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/boardsInvited` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getNotificationsByIdMember`<a id="trellomembergetnotificationsbyidmember"></a>

You can only read the notifications for the member associated with the supplied token

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getNotificationsByIdMemberResponse =
  await trello.member.getNotificationsByIdMember({
    idMember: "idMember_example",
    filter: "all",
    readFilter: "all",
    fields: "all",
    limit: "50",
    page: "0",
    memberCreatorFields: "avatarHash, fullName, initials and username",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### entities: `string`<a id="entities-string"></a>

 true or false

##### display: `string`<a id="display-string"></a>

 true or false

##### filter: `string`<a id="filter-string"></a>

all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard

##### readFilter: `string`<a id="readfilter-string"></a>

One of: all, read or unread

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: data, date, idMemberCreator, type or unread

##### limit: `string`<a id="limit-string"></a>

a number from 1 to 1000

##### page: `string`<a id="page-string"></a>

a number from 0 to 100

##### before: `string`<a id="before-string"></a>

An id, or null

##### since: `string`<a id="since-string"></a>

An id, or null

##### memberCreator: `string`<a id="membercreator-string"></a>

 true or false

##### memberCreatorFields: `string`<a id="membercreatorfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/notifications` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getNotificationsByIdMemberByFilter`<a id="trellomembergetnotificationsbyidmemberbyfilter"></a>

getMembersNotificationsByIdMemberByFilter()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getNotificationsByIdMemberByFilterResponse =
  await trello.member.getNotificationsByIdMemberByFilter({
    idMember: "idMember_example",
    filter: "filter_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### filter: `string`<a id="filter-string"></a>

filter

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/notifications/{filter}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getOrganizations`<a id="trellomembergetorganizations"></a>

getMembersOrganizationsByIdMemberByFilter()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOrganizationsResponse = await trello.member.getOrganizations({
  idMember: "idMember_example",
  filter: "filter_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### filter: `string`<a id="filter-string"></a>

filter

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/organizations/{filter}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getSavedSearchByIds`<a id="trellomembergetsavedsearchbyids"></a>

getMembersSavedSearchesByIdMemberByIdSavedSearch()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSavedSearchByIdsResponse = await trello.member.getSavedSearchByIds({
  idMember: "idMember_example",
  idSavedSearch: "idSavedSearch_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### idSavedSearch: `string`<a id="idsavedsearch-string"></a>

idSavedSearch

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/savedSearches/{idSavedSearch}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getSavedSearchesByIdMember`<a id="trellomembergetsavedsearchesbyidmember"></a>

getMembersSavedSearchesByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSavedSearchesByIdMemberResponse =
  await trello.member.getSavedSearchesByIdMember({
    idMember: "idMember_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/savedSearches` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.getTokensByIdMember`<a id="trellomembergettokensbyidmember"></a>

getMembersTokensByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTokensByIdMemberResponse = await trello.member.getTokensByIdMember({
  idMember: "idMember_example",
  filter: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### filter: `string`<a id="filter-string"></a>

One of: all or none

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/tokens` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.listActionsByIdMember`<a id="trellomemberlistactionsbyidmember"></a>

getMembersActionsByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listActionsByIdMemberResponse = await trello.member.listActionsByIdMember(
  {
    idMember: "idMember_example",
    filter: "all",
    fields: "all",
    limit: "50",
    format: "list",
    page: "0",
    memberFields: "avatarHash, fullName, initials and username",
    memberCreatorFields: "avatarHash, fullName, initials and username",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### entities: `string`<a id="entities-string"></a>

 true or false

##### display: `string`<a id="display-string"></a>

 true or false

##### filter: `string`<a id="filter-string"></a>

all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: data, date, idMemberCreator or type

##### limit: `string`<a id="limit-string"></a>

a number from 0 to 1000

##### format: `string`<a id="format-string"></a>

One of: count, list or minimal

##### since: `string`<a id="since-string"></a>

A date, null or lastView

##### before: `string`<a id="before-string"></a>

A date, or null

##### page: `string`<a id="page-string"></a>

Page * limit must be less than 1000

##### idModels: `string`<a id="idmodels-string"></a>

Only return actions related to these model ids

##### member: `string`<a id="member-string"></a>

 true or false

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### memberCreator: `string`<a id="membercreator-string"></a>

 true or false

##### memberCreatorFields: `string`<a id="membercreatorfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/actions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.listCustomEmojiByIdMember`<a id="trellomemberlistcustomemojibyidmember"></a>

This gets the list of all of the user’s uploaded emoji

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCustomEmojiByIdMemberResponse =
  await trello.member.listCustomEmojiByIdMember({
    idMember: "idMember_example",
    filter: "all",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### filter: `string`<a id="filter-string"></a>

One of: all or none

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/customEmoji` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.listInvitedOrganizationsById`<a id="trellomemberlistinvitedorganizationsbyid"></a>

getMembersOrganizationsInvitedByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listInvitedOrganizationsByIdResponse =
  await trello.member.listInvitedOrganizationsById({
    idMember: "idMember_example",
    fields: "all",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/organizationsInvited` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.listOrganizationsById`<a id="trellomemberlistorganizationsbyid"></a>

getMembersOrganizationsByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listOrganizationsByIdResponse = await trello.member.listOrganizationsById(
  {
    idMember: "idMember_example",
    filter: "all",
    fields: "all",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### filter: `string`<a id="filter-string"></a>

One of: all, members, none or public

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website

##### paidAccount: `string`<a id="paidaccount-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/organizations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.listOrganizationsInvitedByIdMemberByField`<a id="trellomemberlistorganizationsinvitedbyidmemberbyfield"></a>

getMembersOrganizationsInvitedByIdMemberByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listOrganizationsInvitedByIdMemberByFieldResponse =
  await trello.member.listOrganizationsInvitedByIdMemberByField({
    idMember: "idMember_example",
    field: "field_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/organizationsInvited/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.removeBoardStarByIdMemberByIdBoardStar`<a id="trellomemberremoveboardstarbyidmemberbyidboardstar"></a>

deleteMembersBoardStarsByIdMemberByIdBoardStar()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeBoardStarByIdMemberByIdBoardStarResponse =
  await trello.member.removeBoardStarByIdMemberByIdBoardStar({
    idMember: "idMember_example",
    idBoardStar: "idBoardStar_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### idBoardStar: `string`<a id="idboardstar-string"></a>

idBoardStar

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/boardStars/{idBoardStar}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.removeCustomBoardBackgroundById`<a id="trellomemberremovecustomboardbackgroundbyid"></a>

deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeCustomBoardBackgroundByIdResponse =
  await trello.member.removeCustomBoardBackgroundById({
    idMember: "idMember_example",
    idBoardBackground: "idBoardBackground_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### idBoardBackground: `string`<a id="idboardbackground-string"></a>

idBoardBackground

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/customBoardBackgrounds/{idBoardBackground}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.removeCustomStickerByIds`<a id="trellomemberremovecustomstickerbyids"></a>

deleteMembersCustomStickersByIdMemberByIdCustomSticker()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeCustomStickerByIdsResponse =
  await trello.member.removeCustomStickerByIds({
    idMember: "idMember_example",
    idCustomSticker: "idCustomSticker_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### idCustomSticker: `string`<a id="idcustomsticker-string"></a>

idCustomSticker

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/customStickers/{idCustomSticker}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.removeSavedSearchByIds`<a id="trellomemberremovesavedsearchbyids"></a>

deleteMembersSavedSearchesByIdMemberByIdSavedSearch()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeSavedSearchByIdsResponse =
  await trello.member.removeSavedSearchByIds({
    idMember: "idMember_example",
    idSavedSearch: "idSavedSearch_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### idSavedSearch: `string`<a id="idsavedsearch-string"></a>

idSavedSearch

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/savedSearches/{idSavedSearch}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.updateAvatarSource`<a id="trellomemberupdateavatarsource"></a>

updateMembersAvatarSourceByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAvatarSourceResponse = await trello.member.updateAvatarSource({
  idMember: "idMember_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### value: `string`<a id="value-string"></a>

One of: gravatar, none or upload

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/avatarSource` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.updateBioById`<a id="trellomemberupdatebiobyid"></a>

updateMembersBioByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBioByIdResponse = await trello.member.updateBioById({
  idMember: "idMember_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### value: `string`<a id="value-string"></a>

a string with a length from 0 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/bio` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.updateBoardBackgroundsById`<a id="trellomemberupdateboardbackgroundsbyid"></a>

updateMembersBoardBackgroundsByIdMemberByIdBoardBackground()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBoardBackgroundsByIdResponse =
  await trello.member.updateBoardBackgroundsById({
    idMember: "idMember_example",
    idBoardBackground: "idBoardBackground_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### idBoardBackground: `string`<a id="idboardbackground-string"></a>

idBoardBackground

##### brightness: `string`<a id="brightness-string"></a>

One of: dark, light or unknown

##### file: `string`<a id="file-string"></a>

A file

##### tile: `string`<a id="tile-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/boardBackgrounds/{idBoardBackground}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.updateBoardStar`<a id="trellomemberupdateboardstar"></a>

updateMembersBoardStarsByIdMemberByIdBoardStar()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBoardStarResponse = await trello.member.updateBoardStar({
  idMember: "idMember_example",
  idBoardStar: "idBoardStar_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### idBoardStar: `string`<a id="idboardstar-string"></a>

idBoardStar

##### idBoard: `string`<a id="idboard-string"></a>

The id of the board to star

##### pos: `string`<a id="pos-string"></a>

A position. top , bottom , or a positive number.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/boardStars/{idBoardStar}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.updateBoardStarPosByIdMemberByIdBoardStar`<a id="trellomemberupdateboardstarposbyidmemberbyidboardstar"></a>

updateMembersBoardStarsPosByIdMemberByIdBoardStar()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBoardStarPosByIdMemberByIdBoardStarResponse =
  await trello.member.updateBoardStarPosByIdMemberByIdBoardStar({
    idMember: "idMember_example",
    idBoardStar: "idBoardStar_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### idBoardStar: `string`<a id="idboardstar-string"></a>

idBoardStar

##### value: `string`<a id="value-string"></a>

A position. top , bottom , or a positive number.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/boardStars/{idBoardStar}/pos` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.updateBoardStarsIdBoard`<a id="trellomemberupdateboardstarsidboard"></a>

updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBoardStarsIdBoardResponse =
  await trello.member.updateBoardStarsIdBoard({
    idMember: "idMember_example",
    idBoardStar: "idBoardStar_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### idBoardStar: `string`<a id="idboardstar-string"></a>

idBoardStar

##### value: `string`<a id="value-string"></a>

An id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/boardStars/{idBoardStar}/idBoard` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.updateByIdMember`<a id="trellomemberupdatebyidmember"></a>

updateMembersByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdMemberResponse = await trello.member.updateByIdMember({
  idMember: "idMember_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### avatarSource: `string`<a id="avatarsource-string"></a>

One of: gravatar, none or upload

##### bio: `string`<a id="bio-string"></a>

a string with a length from 0 to 16384

##### fullName: `string`<a id="fullname-string"></a>

A string with a length of at least 1.  Cannot begin or end with a space.

##### initials: `string`<a id="initials-string"></a>

A string with a length from 1 to 4.  Cannot begin or end with a space

##### prefs/colorBlind: `string`<a id="prefscolorblind-string"></a>

 true or false

##### prefs/locale: `string`<a id="prefslocale-string"></a>

a string with a length from 0 to 255

##### prefs/minutesBetweenSummaries: `string`<a id="prefsminutesbetweensummaries-string"></a>

-1 (disabled), 1 or 60

##### username: `string`<a id="username-string"></a>

A string with a length of at least 3.  Only lowercase letters, underscores, and numbers are allowed.  Must be unique.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.updateCustomBoardBackgrounds`<a id="trellomemberupdatecustomboardbackgrounds"></a>

updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCustomBoardBackgroundsResponse =
  await trello.member.updateCustomBoardBackgrounds({
    idMember: "idMember_example",
    idBoardBackground: "idBoardBackground_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### idBoardBackground: `string`<a id="idboardbackground-string"></a>

idBoardBackground

##### brightness: `string`<a id="brightness-string"></a>

One of: dark, light or unknown

##### file: `string`<a id="file-string"></a>

A file

##### tile: `string`<a id="tile-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/customBoardBackgrounds/{idBoardBackground}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.updateFullName`<a id="trellomemberupdatefullname"></a>

updateMembersFullNameByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFullNameResponse = await trello.member.updateFullName({
  idMember: "idMember_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### value: `string`<a id="value-string"></a>

A string with a length of at least 1.  Cannot begin or end with a space.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/fullName` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.updateInitialsByIdMember`<a id="trellomemberupdateinitialsbyidmember"></a>

updateMembersInitialsByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateInitialsByIdMemberResponse =
  await trello.member.updateInitialsByIdMember({
    idMember: "idMember_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### value: `string`<a id="value-string"></a>

A string with a length from 1 to 4.  Cannot begin or end with a space

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/initials` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.updatePrefsColorBlindByIdMember`<a id="trellomemberupdateprefscolorblindbyidmember"></a>

updateMembersPrefsColorBlindByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsColorBlindByIdMemberResponse =
  await trello.member.updatePrefsColorBlindByIdMember({
    idMember: "idMember_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### value: `string`<a id="value-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/prefs/colorBlind` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.updatePrefsLocaleByIdMember`<a id="trellomemberupdateprefslocalebyidmember"></a>

updateMembersPrefsLocaleByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsLocaleByIdMemberResponse =
  await trello.member.updatePrefsLocaleByIdMember({
    idMember: "idMember_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### value: `string`<a id="value-string"></a>

a string with a length from 0 to 255

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/prefs/locale` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.updatePrefsMinutesBetweenSummariesById`<a id="trellomemberupdateprefsminutesbetweensummariesbyid"></a>

updateMembersPrefsMinutesBetweenSummariesByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsMinutesBetweenSummariesByIdResponse =
  await trello.member.updatePrefsMinutesBetweenSummariesById({
    idMember: "idMember_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### value: `string`<a id="value-string"></a>

-1 (disabled), 1 or 60

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/prefs/minutesBetweenSummaries` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.updateSavedSearchQueryByIdMemberByIdSavedSearch`<a id="trellomemberupdatesavedsearchquerybyidmemberbyidsavedsearch"></a>

updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSavedSearchQueryByIdMemberByIdSavedSearchResponse =
  await trello.member.updateSavedSearchQueryByIdMemberByIdSavedSearch({
    idMember: "idMember_example",
    idSavedSearch: "idSavedSearch_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### idSavedSearch: `string`<a id="idsavedsearch-string"></a>

idSavedSearch

##### value: `string`<a id="value-string"></a>

a string with a length from 1 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/savedSearches/{idSavedSearch}/query` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.updateSavedSearchesByIdMemberByIdSavedSearch`<a id="trellomemberupdatesavedsearchesbyidmemberbyidsavedsearch"></a>

updateMembersSavedSearchesByIdMemberByIdSavedSearch()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSavedSearchesByIdMemberByIdSavedSearchResponse =
  await trello.member.updateSavedSearchesByIdMemberByIdSavedSearch({
    idMember: "idMember_example",
    idSavedSearch: "idSavedSearch_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### idSavedSearch: `string`<a id="idsavedsearch-string"></a>

idSavedSearch

##### name: `string`<a id="name-string"></a>

A non-empty string with at least one non-space character

##### pos: `string`<a id="pos-string"></a>

A position. top , bottom , or a positive number.

##### query: `string`<a id="query-string"></a>

a string with a length from 1 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/savedSearches/{idSavedSearch}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.updateSavedSearchesNameByIdMemberByIdSavedSearch`<a id="trellomemberupdatesavedsearchesnamebyidmemberbyidsavedsearch"></a>

updateMembersSavedSearchesNameByIdMemberByIdSavedSearch()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSavedSearchesNameByIdMemberByIdSavedSearchResponse =
  await trello.member.updateSavedSearchesNameByIdMemberByIdSavedSearch({
    idMember: "idMember_example",
    idSavedSearch: "idSavedSearch_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### idSavedSearch: `string`<a id="idsavedsearch-string"></a>

idSavedSearch

##### value: `string`<a id="value-string"></a>

A non-empty string with at least one non-space character

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/savedSearches/{idSavedSearch}/name` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.updateSavedSearchesPosByIdMemberByIdSavedSearch`<a id="trellomemberupdatesavedsearchesposbyidmemberbyidsavedsearch"></a>

updateMembersSavedSearchesPosByIdMemberByIdSavedSearch()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSavedSearchesPosByIdMemberByIdSavedSearchResponse =
  await trello.member.updateSavedSearchesPosByIdMemberByIdSavedSearch({
    idMember: "idMember_example",
    idSavedSearch: "idSavedSearch_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### idSavedSearch: `string`<a id="idsavedsearch-string"></a>

idSavedSearch

##### value: `string`<a id="value-string"></a>

A position. top , bottom , or a positive number.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/savedSearches/{idSavedSearch}/pos` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.updateUsernameById`<a id="trellomemberupdateusernamebyid"></a>

updateMembersUsernameByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUsernameByIdResponse = await trello.member.updateUsernameById({
  idMember: "idMember_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### value: `string`<a id="value-string"></a>

A string with a length of at least 3.  Only lowercase letters, underscores, and numbers are allowed.  Must be unique.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/username` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.member.uploadAvatarById`<a id="trellomemberuploadavatarbyid"></a>

addMembersAvatarByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadAvatarByIdResponse = await trello.member.uploadAvatarById({
  idMember: "idMember_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idMember: `string`<a id="idmember-string"></a>

idMember or username

##### file: `string`<a id="file-string"></a>

A file

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/members/{idMember}/avatar` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.notification.getBoardByField`<a id="trellonotificationgetboardbyfield"></a>

getNotificationsBoardByIdNotificationByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoardByFieldResponse = await trello.notification.getBoardByField({
  idNotification: "idNotification_example",
  field: "field_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idNotification: `string`<a id="idnotification-string"></a>

idNotification

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/{idNotification}/board/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.notification.getBoardById`<a id="trellonotificationgetboardbyid"></a>

getNotificationsBoardByIdNotification()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoardByIdResponse = await trello.notification.getBoardById({
  idNotification: "idNotification_example",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idNotification: `string`<a id="idnotification-string"></a>

idNotification

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/{idNotification}/board` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.notification.getById`<a id="trellonotificationgetbyid"></a>

getNotificationsByIdNotification()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await trello.notification.getById({
  idNotification: "idNotification_example",
  fields: "all",
  memberCreatorFields: "avatarHash, fullName, initials and username",
  boardFields: "name",
  cardFields: "name",
  organizationFields: "displayName",
  memberFields: "avatarHash, fullName, initials and username",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idNotification: `string`<a id="idnotification-string"></a>

idNotification

##### display: `string`<a id="display-string"></a>

 true or false

##### entities: `string`<a id="entities-string"></a>

 true or false

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: data, date, idMemberCreator, type or unread

##### memberCreator: `string`<a id="membercreator-string"></a>

 true or false

##### memberCreatorFields: `string`<a id="membercreatorfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### board: `string`<a id="board-string"></a>

 true or false

##### boardFields: `string`<a id="boardfields-string"></a>

all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

##### list: `string`<a id="list-string"></a>

 true or false

##### card: `string`<a id="card-string"></a>

 true or false

##### cardFields: `string`<a id="cardfields-string"></a>

all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

##### organization: `string`<a id="organization-string"></a>

 true or false

##### organizationFields: `string`<a id="organizationfields-string"></a>

all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website

##### member: `string`<a id="member-string"></a>

 true or false

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/{idNotification}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.notification.getByIdField`<a id="trellonotificationgetbyidfield"></a>

getNotificationsByIdNotificationByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdFieldResponse = await trello.notification.getByIdField({
  idNotification: "idNotification_example",
  field: "field_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idNotification: `string`<a id="idnotification-string"></a>

idNotification

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/{idNotification}/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.notification.getCardById`<a id="trellonotificationgetcardbyid"></a>

getNotificationsCardByIdNotification()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCardByIdResponse = await trello.notification.getCardById({
  idNotification: "idNotification_example",
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idNotification: `string`<a id="idnotification-string"></a>

idNotification

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/{idNotification}/card` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.notification.getCardByIdNotificationByField`<a id="trellonotificationgetcardbyidnotificationbyfield"></a>

getNotificationsCardByIdNotificationByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCardByIdNotificationByFieldResponse =
  await trello.notification.getCardByIdNotificationByField({
    idNotification: "idNotification_example",
    field: "field_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idNotification: `string`<a id="idnotification-string"></a>

idNotification

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/{idNotification}/card/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.notification.getDisplayByIdNotification`<a id="trellonotificationgetdisplaybyidnotification"></a>

getNotificationsDisplayByIdNotification()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDisplayByIdNotificationResponse =
  await trello.notification.getDisplayByIdNotification({
    idNotification: "idNotification_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idNotification: `string`<a id="idnotification-string"></a>

idNotification

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/{idNotification}/display` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.notification.getEntitiesByIdNotification`<a id="trellonotificationgetentitiesbyidnotification"></a>

getNotificationsEntitiesByIdNotification()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEntitiesByIdNotificationResponse =
  await trello.notification.getEntitiesByIdNotification({
    idNotification: "idNotification_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idNotification: `string`<a id="idnotification-string"></a>

idNotification

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/{idNotification}/entities` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.notification.getListByIdNotification`<a id="trellonotificationgetlistbyidnotification"></a>

getNotificationsListByIdNotification()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListByIdNotificationResponse =
  await trello.notification.getListByIdNotification({
    idNotification: "idNotification_example",
    fields: "all",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idNotification: `string`<a id="idnotification-string"></a>

idNotification

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: closed, idBoard, name, pos or subscribed

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/{idNotification}/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.notification.getListByIdNotificationByField`<a id="trellonotificationgetlistbyidnotificationbyfield"></a>

getNotificationsListByIdNotificationByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListByIdNotificationByFieldResponse =
  await trello.notification.getListByIdNotificationByField({
    idNotification: "idNotification_example",
    field: "field_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idNotification: `string`<a id="idnotification-string"></a>

idNotification

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/{idNotification}/list/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.notification.getMemberByIdField`<a id="trellonotificationgetmemberbyidfield"></a>

getNotificationsMemberByIdNotificationByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMemberByIdFieldResponse = await trello.notification.getMemberByIdField(
  {
    idNotification: "idNotification_example",
    field: "field_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idNotification: `string`<a id="idnotification-string"></a>

idNotification

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/{idNotification}/member/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.notification.getMemberByIdNotificationByField`<a id="trellonotificationgetmemberbyidnotificationbyfield"></a>

getNotificationsMemberCreatorByIdNotificationByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMemberByIdNotificationByFieldResponse =
  await trello.notification.getMemberByIdNotificationByField({
    idNotification: "idNotification_example",
    field: "field_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idNotification: `string`<a id="idnotification-string"></a>

idNotification

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/{idNotification}/memberCreator/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.notification.getMemberByNotification`<a id="trellonotificationgetmemberbynotification"></a>

getNotificationsMemberByIdNotification()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMemberByNotificationResponse =
  await trello.notification.getMemberByNotification({
    idNotification: "idNotification_example",
    fields: "all",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idNotification: `string`<a id="idnotification-string"></a>

idNotification

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/{idNotification}/member` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.notification.getMemberCreatorById`<a id="trellonotificationgetmembercreatorbyid"></a>

getNotificationsMemberCreatorByIdNotification()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMemberCreatorByIdResponse =
  await trello.notification.getMemberCreatorById({
    idNotification: "idNotification_example",
    fields: "all",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idNotification: `string`<a id="idnotification-string"></a>

idNotification

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/{idNotification}/memberCreator` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.notification.getOrganizationByIdNotification`<a id="trellonotificationgetorganizationbyidnotification"></a>

getNotificationsOrganizationByIdNotification()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOrganizationByIdNotificationResponse =
  await trello.notification.getOrganizationByIdNotification({
    idNotification: "idNotification_example",
    fields: "all",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idNotification: `string`<a id="idnotification-string"></a>

idNotification

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/{idNotification}/organization` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.notification.getOrganizationByIdNotificationByField`<a id="trellonotificationgetorganizationbyidnotificationbyfield"></a>

getNotificationsOrganizationByIdNotificationByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOrganizationByIdNotificationByFieldResponse =
  await trello.notification.getOrganizationByIdNotificationByField({
    idNotification: "idNotification_example",
    field: "field_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idNotification: `string`<a id="idnotification-string"></a>

idNotification

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/{idNotification}/organization/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.notification.markAllAsRead`<a id="trellonotificationmarkallasread"></a>

addNotificationsAllRead()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const markAllAsReadResponse = await trello.notification.markAllAsRead();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/all/read` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.notification.updateByIdNotification`<a id="trellonotificationupdatebyidnotification"></a>

updateNotificationsByIdNotification()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdNotificationResponse =
  await trello.notification.updateByIdNotification({
    idNotification: "idNotification_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idNotification: `string`<a id="idnotification-string"></a>

idNotification

##### unread: `string`<a id="unread-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/{idNotification}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.notification.updateUnreadByIdNotification`<a id="trellonotificationupdateunreadbyidnotification"></a>

updateNotificationsUnreadByIdNotification()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUnreadByIdNotificationResponse =
  await trello.notification.updateUnreadByIdNotification({
    idNotification: "idNotification_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idNotification: `string`<a id="idnotification-string"></a>

idNotification

##### value: `string`<a id="value-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/{idNotification}/unread` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.create`<a id="trelloorganizationcreate"></a>

addOrganizations()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createResponse = await trello.organization.create({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### desc: `string`<a id="desc-string"></a>

a string with a length from 0 to 16384

##### displayName: `string`<a id="displayname-string"></a>

A string with a length of at least 1.  Cannot begin or end with a space.

##### name: `string`<a id="name-string"></a>

a string with a length from 0 to 16384

##### prefs/associatedDomain: `string`<a id="prefsassociateddomain-string"></a>

The google apps domain to link this org to.

##### prefs/boardVisibilityRestrict/org: `string`<a id="prefsboardvisibilityrestrictorg-string"></a>

One of: admin, none or org

##### prefs/boardVisibilityRestrict/private: `string`<a id="prefsboardvisibilityrestrictprivate-string"></a>

One of: admin, none or org

##### prefs/boardVisibilityRestrict/public: `string`<a id="prefsboardvisibilityrestrictpublic-string"></a>

One of: admin, none or org

##### prefs/externalMembersDisabled: `string`<a id="prefsexternalmembersdisabled-string"></a>

 true or false

##### prefs/googleAppsVersion: `string`<a id="prefsgoogleappsversion-string"></a>

a number from 1 to 2

##### prefs/orgInviteRestrict: `string`<a id="prefsorginviterestrict-string"></a>

An email address with optional expansion tokens

##### prefs/permissionLevel: `string`<a id="prefspermissionlevel-string"></a>

One of: private or public

##### website: `string`<a id="website-string"></a>

A URL starting with http:// or https:// or null

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.deletePrefsAssociatedDomainByIdOrg`<a id="trelloorganizationdeleteprefsassociateddomainbyidorg"></a>

deleteOrganizationsPrefsAssociatedDomainByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deletePrefsAssociatedDomainByIdOrgResponse =
  await trello.organization.deletePrefsAssociatedDomainByIdOrg({
    idOrg: "idOrg_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/prefs/associatedDomain` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.getActionsByIdOrg`<a id="trelloorganizationgetactionsbyidorg"></a>

getOrganizationsActionsByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getActionsByIdOrgResponse = await trello.organization.getActionsByIdOrg({
  idOrg: "idOrg_example",
  filter: "all",
  fields: "all",
  limit: "50",
  format: "list",
  page: "0",
  memberFields: "avatarHash, fullName, initials and username",
  memberCreatorFields: "avatarHash, fullName, initials and username",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### entities: `string`<a id="entities-string"></a>

 true or false

##### display: `string`<a id="display-string"></a>

 true or false

##### filter: `string`<a id="filter-string"></a>

all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: data, date, idMemberCreator or type

##### limit: `string`<a id="limit-string"></a>

a number from 0 to 1000

##### format: `string`<a id="format-string"></a>

One of: count, list or minimal

##### since: `string`<a id="since-string"></a>

A date, null or lastView

##### before: `string`<a id="before-string"></a>

A date, or null

##### page: `string`<a id="page-string"></a>

Page * limit must be less than 1000

##### idModels: `string`<a id="idmodels-string"></a>

Only return actions related to these model ids

##### member: `string`<a id="member-string"></a>

 true or false

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### memberCreator: `string`<a id="membercreator-string"></a>

 true or false

##### memberCreatorFields: `string`<a id="membercreatorfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/actions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.getBoardsByIdOrgByFilter`<a id="trelloorganizationgetboardsbyidorgbyfilter"></a>

getOrganizationsBoardsByIdOrgByFilter()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoardsByIdOrgByFilterResponse =
  await trello.organization.getBoardsByIdOrgByFilter({
    idOrg: "idOrg_example",
    filter: "filter_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### filter: `string`<a id="filter-string"></a>

filter

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/boards/{filter}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.getBoardsByOrgId`<a id="trelloorganizationgetboardsbyorgid"></a>

getOrganizationsBoardsByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoardsByOrgIdResponse = await trello.organization.getBoardsByOrgId({
  idOrg: "idOrg_example",
  filter: "all",
  fields: "all",
  actionsLimit: "50",
  actionsFormat: "list",
  actionFields: "all",
  memberships: "none",
  organizationFields: "name and displayName",
  lists: "none",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### filter: `string`<a id="filter-string"></a>

all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

##### actions: `string`<a id="actions-string"></a>

all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization

##### actionsEntities: `string`<a id="actionsentities-string"></a>

 true or false

##### actionsLimit: `string`<a id="actionslimit-string"></a>

a number from 0 to 1000

##### actionsFormat: `string`<a id="actionsformat-string"></a>

One of: count, list or minimal

##### actionsSince: `string`<a id="actionssince-string"></a>

A date, null or lastView

##### actionFields: `string`<a id="actionfields-string"></a>

all or a comma-separated list of: data, date, idMemberCreator or type

##### memberships: `string`<a id="memberships-string"></a>

all or a comma-separated list of: active, admin, deactivated, me or normal

##### organization: `string`<a id="organization-string"></a>

 true or false

##### organizationFields: `string`<a id="organizationfields-string"></a>

all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website

##### lists: `string`<a id="lists-string"></a>

One of: all, closed, none or open

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/boards` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.getByIdAndField`<a id="trelloorganizationgetbyidandfield"></a>

getOrganizationsByIdOrgByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdAndFieldResponse = await trello.organization.getByIdAndField({
  idOrg: "idOrg_example",
  field: "field_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.getByIdOrg`<a id="trelloorganizationgetbyidorg"></a>

getOrganizationsByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdOrgResponse = await trello.organization.getByIdOrg({
  idOrg: "idOrg_example",
  actionsLimit: "50",
  actionFields: "all",
  memberships: "none",
  membershipsMemberFields: "fullName and username",
  members: "none",
  memberFields: "avatarHash, fullName, initials, username and confirmed",
  membersInvited: "none",
  membersInvitedFields: "avatarHash, initials, fullName and username",
  boards: "none",
  boardFields: "all",
  boardActionsFormat: "list",
  boardActionsLimit: "50",
  boardActionFields: "all",
  boardLists: "none",
  fields:
    "name, displayName, desc, descData, url, website, logoHash, products and powerUps",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### actions: `string`<a id="actions-string"></a>

all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization

##### actionsEntities: `string`<a id="actionsentities-string"></a>

 true or false

##### actionsDisplay: `string`<a id="actionsdisplay-string"></a>

 true or false

##### actionsLimit: `string`<a id="actionslimit-string"></a>

a number from 0 to 1000

##### actionFields: `string`<a id="actionfields-string"></a>

all or a comma-separated list of: data, date, idMemberCreator or type

##### memberships: `string`<a id="memberships-string"></a>

all or a comma-separated list of: active, admin, deactivated, me or normal

##### membershipsMember: `string`<a id="membershipsmember-string"></a>

 true or false

##### membershipsMemberFields: `string`<a id="membershipsmemberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### members: `string`<a id="members-string"></a>

One of: admins, all, none, normal or owners

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### memberActivity: `string`<a id="memberactivity-string"></a>

true or false ; works for premium organizations only.

##### membersInvited: `string`<a id="membersinvited-string"></a>

One of: admins, all, none, normal or owners

##### membersInvitedFields: `string`<a id="membersinvitedfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### boards: `string`<a id="boards-string"></a>

all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned

##### boardFields: `string`<a id="boardfields-string"></a>

all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

##### boardActions: `string`<a id="boardactions-string"></a>

all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization

##### boardActionsEntities: `string`<a id="boardactionsentities-string"></a>

 true or false

##### boardActionsDisplay: `string`<a id="boardactionsdisplay-string"></a>

 true or false

##### boardActionsFormat: `string`<a id="boardactionsformat-string"></a>

One of: count, list or minimal

##### boardActionsSince: `string`<a id="boardactionssince-string"></a>

A date, null or lastView

##### boardActionsLimit: `string`<a id="boardactionslimit-string"></a>

a number from 0 to 1000

##### boardActionFields: `string`<a id="boardactionfields-string"></a>

all or a comma-separated list of: data, date, idMemberCreator or type

##### boardLists: `string`<a id="boardlists-string"></a>

One of: all, closed, none or open

##### paidAccount: `string`<a id="paidaccount-string"></a>

 true or false

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.getMembersByIdOrg`<a id="trelloorganizationgetmembersbyidorg"></a>

getOrganizationsMembersByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMembersByIdOrgResponse = await trello.organization.getMembersByIdOrg({
  idOrg: "idOrg_example",
  filter: "all",
  fields: "fullName and username",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### filter: `string`<a id="filter-string"></a>

One of: admins, all, none, normal or owners

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### activity: `string`<a id="activity-string"></a>

true or false ; works for premium organizations only.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/members` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.getMembersInvitedByIdOrg`<a id="trelloorganizationgetmembersinvitedbyidorg"></a>

getOrganizationsMembersInvitedByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMembersInvitedByIdOrgResponse =
  await trello.organization.getMembersInvitedByIdOrg({
    idOrg: "idOrg_example",
    fields: "all",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/membersInvited` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.getMembersInvitedByIdOrgByField`<a id="trelloorganizationgetmembersinvitedbyidorgbyfield"></a>

getOrganizationsMembersInvitedByIdOrgByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMembersInvitedByIdOrgByFieldResponse =
  await trello.organization.getMembersInvitedByIdOrgByField({
    idOrg: "idOrg_example",
    field: "field_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/membersInvited/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.getMembershipsByIdOrgByIdMembership`<a id="trelloorganizationgetmembershipsbyidorgbyidmembership"></a>

getOrganizationsMembershipsByIdOrgByIdMembership()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMembershipsByIdOrgByIdMembershipResponse =
  await trello.organization.getMembershipsByIdOrgByIdMembership({
    idOrg: "idOrg_example",
    idMembership: "idMembership_example",
    memberFields: "fullName and username",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### idMembership: `string`<a id="idmembership-string"></a>

idMembership

##### member: `string`<a id="member-string"></a>

 true or false

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/memberships/{idMembership}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.getOrganizationDeltas`<a id="trelloorganizationgetorganizationdeltas"></a>

getOrganizationsDeltasByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOrganizationDeltasResponse =
  await trello.organization.getOrganizationDeltas({
    idOrg: "idOrg_example",
    tags: "tags_example",
    ixLastUpdate: "ixLastUpdate_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### tags: `string`<a id="tags-string"></a>

A valid tag for subscribing

##### ixLastUpdate: `string`<a id="ixlastupdate-string"></a>

a number from -1 to Infinity

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/deltas` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.listMembersByIdOrgByFilter`<a id="trelloorganizationlistmembersbyidorgbyfilter"></a>

getOrganizationsMembersByIdOrgByFilter()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMembersByIdOrgByFilterResponse =
  await trello.organization.listMembersByIdOrgByFilter({
    idOrg: "idOrg_example",
    filter: "filter_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### filter: `string`<a id="filter-string"></a>

filter

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/members/{filter}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.listMembersCardsByIdOrgByIdMember`<a id="trelloorganizationlistmemberscardsbyidorgbyidmember"></a>

getOrganizationsMembersCardsByIdOrgByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMembersCardsByIdOrgByIdMemberResponse =
  await trello.organization.listMembersCardsByIdOrgByIdMember({
    idOrg: "idOrg_example",
    idMember: "idMember_example",
    attachmentFields: "all",
    memberFields: "avatarHash, fullName, initials and username",
    checklists: "none",
    boardFields: "name, desc, closed, idOrganization, pinned, url and prefs",
    listFields: "all",
    filter: "visible",
    fields: "all",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### idMember: `string`<a id="idmember-string"></a>

idMember

##### actions: `string`<a id="actions-string"></a>

all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization

##### attachments: `string`<a id="attachments-string"></a>

A boolean value or &quot;cover&quot; for only card cover attachments

##### attachmentFields: `string`<a id="attachmentfields-string"></a>

all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url

##### members: `string`<a id="members-string"></a>

 true or false

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### checkItemStates: `string`<a id="checkitemstates-string"></a>

 true or false

##### checklists: `string`<a id="checklists-string"></a>

One of: all or none

##### board: `string`<a id="board-string"></a>

 true or false

##### boardFields: `string`<a id="boardfields-string"></a>

all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

##### list: `string`<a id="list-string"></a>

 true or false

##### listFields: `string`<a id="listfields-string"></a>

all or a comma-separated list of: closed, idBoard, name, pos or subscribed

##### filter: `string`<a id="filter-string"></a>

One of: all, closed, none, open or visible

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/members/{idMember}/cards` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.listMembershipsByIdOrg`<a id="trelloorganizationlistmembershipsbyidorg"></a>

getOrganizationsMembershipsByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMembershipsByIdOrgResponse =
  await trello.organization.listMembershipsByIdOrg({
    idOrg: "idOrg_example",
    filter: "all",
    memberFields: "fullName and username",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### filter: `string`<a id="filter-string"></a>

all or a comma-separated list of: active, admin, deactivated, me or normal

##### member: `string`<a id="member-string"></a>

 true or false

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/memberships` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.removeByIdOrg`<a id="trelloorganizationremovebyidorg"></a>

deleteOrganizationsByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdOrgResponse = await trello.organization.removeByIdOrg({
  idOrg: "idOrg_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.removeInviteRestrictByIdOrg`<a id="trelloorganizationremoveinviterestrictbyidorg"></a>

deleteOrganizationsPrefsOrgInviteRestrictByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeInviteRestrictByIdOrgResponse =
  await trello.organization.removeInviteRestrictByIdOrg({
    idOrg: "idOrg_example",
    value: "value_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### value: `string`<a id="value-string"></a>

An email address with optional expansion tokens

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/prefs/orgInviteRestrict` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.removeLogoByIdOrg`<a id="trelloorganizationremovelogobyidorg"></a>

deleteOrganizationsLogoByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeLogoByIdOrgResponse = await trello.organization.removeLogoByIdOrg({
  idOrg: "idOrg_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/logo` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.removeMemberAll`<a id="trelloorganizationremovememberall"></a>

deleteOrganizationsMembersAllByIdOrgByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeMemberAllResponse = await trello.organization.removeMemberAll({
  idOrg: "idOrg_example",
  idMember: "idMember_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### idMember: `string`<a id="idmember-string"></a>

idMember

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/members/{idMember}/all` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.removeMemberByIdOrgByIdMember`<a id="trelloorganizationremovememberbyidorgbyidmember"></a>

deleteOrganizationsMembersByIdOrgByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeMemberByIdOrgByIdMemberResponse =
  await trello.organization.removeMemberByIdOrgByIdMember({
    idOrg: "idOrg_example",
    idMember: "idMember_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### idMember: `string`<a id="idmember-string"></a>

idMember

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/members/{idMember}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.updateByIdOrg`<a id="trelloorganizationupdatebyidorg"></a>

updateOrganizationsByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdOrgResponse = await trello.organization.updateByIdOrg({
  idOrg: "idOrg_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### desc: `string`<a id="desc-string"></a>

a string with a length from 0 to 16384

##### displayName: `string`<a id="displayname-string"></a>

A string with a length of at least 1.  Cannot begin or end with a space.

##### name: `string`<a id="name-string"></a>

a string with a length from 0 to 16384

##### prefs/associatedDomain: `string`<a id="prefsassociateddomain-string"></a>

The google apps domain to link this org to.

##### prefs/boardVisibilityRestrict/org: `string`<a id="prefsboardvisibilityrestrictorg-string"></a>

One of: admin, none or org

##### prefs/boardVisibilityRestrict/private: `string`<a id="prefsboardvisibilityrestrictprivate-string"></a>

One of: admin, none or org

##### prefs/boardVisibilityRestrict/public: `string`<a id="prefsboardvisibilityrestrictpublic-string"></a>

One of: admin, none or org

##### prefs/externalMembersDisabled: `string`<a id="prefsexternalmembersdisabled-string"></a>

 true or false

##### prefs/googleAppsVersion: `string`<a id="prefsgoogleappsversion-string"></a>

a number from 1 to 2

##### prefs/orgInviteRestrict: `string`<a id="prefsorginviterestrict-string"></a>

An email address with optional expansion tokens

##### prefs/permissionLevel: `string`<a id="prefspermissionlevel-string"></a>

One of: private or public

##### website: `string`<a id="website-string"></a>

A URL starting with http:// or https:// or null

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.updateDescriptionByIdOrg`<a id="trelloorganizationupdatedescriptionbyidorg"></a>

updateOrganizationsDescByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDescriptionByIdOrgResponse =
  await trello.organization.updateDescriptionByIdOrg({
    idOrg: "idOrg_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### value: `string`<a id="value-string"></a>

a string with a length from 0 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/desc` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.updateDisplayNameByIdOrg`<a id="trelloorganizationupdatedisplaynamebyidorg"></a>

updateOrganizationsDisplayNameByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDisplayNameByIdOrgResponse =
  await trello.organization.updateDisplayNameByIdOrg({
    idOrg: "idOrg_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### value: `string`<a id="value-string"></a>

A string with a length of at least 1.  Cannot begin or end with a space.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/displayName` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.updateMembersByIdOrg`<a id="trelloorganizationupdatemembersbyidorg"></a>

updateOrganizationsMembersByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMembersByIdOrgResponse =
  await trello.organization.updateMembersByIdOrg({
    idOrg: "idOrg_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### email: `string`<a id="email-string"></a>

An email address

##### fullName: `string`<a id="fullname-string"></a>

A string with a length of at least 1.  Cannot begin or end with a space.

##### type: `string`<a id="type-string"></a>

One of: admin, normal or observer

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/members` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.updateMembersByIdOrgByIdMember`<a id="trelloorganizationupdatemembersbyidorgbyidmember"></a>

updateOrganizationsMembersByIdOrgByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMembersByIdOrgByIdMemberResponse =
  await trello.organization.updateMembersByIdOrgByIdMember({
    idOrg: "idOrg_example",
    idMember: "idMember_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### idMember: `string`<a id="idmember-string"></a>

idMember

##### email: `string`<a id="email-string"></a>

An email address

##### fullName: `string`<a id="fullname-string"></a>

A string with a length of at least 1.  Cannot begin or end with a space.

##### type: `string`<a id="type-string"></a>

One of: admin, normal or observer

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/members/{idMember}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.updateMembersDeactivatedByIdOrgByIdMember`<a id="trelloorganizationupdatemembersdeactivatedbyidorgbyidmember"></a>

updateOrganizationsMembersDeactivatedByIdOrgByIdMember()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMembersDeactivatedByIdOrgByIdMemberResponse =
  await trello.organization.updateMembersDeactivatedByIdOrgByIdMember({
    idOrg: "idOrg_example",
    idMember: "idMember_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### idMember: `string`<a id="idmember-string"></a>

idMember

##### value: `string`<a id="value-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/members/{idMember}/deactivated` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.updateMembershipByIdOrgByIdMembership`<a id="trelloorganizationupdatemembershipbyidorgbyidmembership"></a>

updateOrganizationsMembershipsByIdOrgByIdMembership()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMembershipByIdOrgByIdMembershipResponse =
  await trello.organization.updateMembershipByIdOrgByIdMembership({
    idOrg: "idOrg_example",
    idMembership: "idMembership_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### idMembership: `string`<a id="idmembership-string"></a>

idMembership

##### member_fields: `string`<a id="member_fields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### type: `string`<a id="type-string"></a>

One of: admin, normal or observer

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/memberships/{idMembership}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.updateNameByIdOrg`<a id="trelloorganizationupdatenamebyidorg"></a>

updateOrganizationsNameByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateNameByIdOrgResponse = await trello.organization.updateNameByIdOrg({
  idOrg: "idOrg_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### value: `string`<a id="value-string"></a>

A string with a length of at least 3.  Only lowercase letters, underscores, and numbers are allowed.  Must be unique.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/name` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.updatePrefsAssociatedDomainByIdOrg`<a id="trelloorganizationupdateprefsassociateddomainbyidorg"></a>

updateOrganizationsPrefsAssociatedDomainByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsAssociatedDomainByIdOrgResponse =
  await trello.organization.updatePrefsAssociatedDomainByIdOrg({
    idOrg: "idOrg_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### value: `string`<a id="value-string"></a>

The google apps domain to link this org to.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/prefs/associatedDomain` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.updatePrefsBoardVisibilityRestrictByIdOrg`<a id="trelloorganizationupdateprefsboardvisibilityrestrictbyidorg"></a>

updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsBoardVisibilityRestrictByIdOrgResponse =
  await trello.organization.updatePrefsBoardVisibilityRestrictByIdOrg({
    idOrg: "idOrg_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### value: `string`<a id="value-string"></a>

One of: admin, none or org

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/prefs/boardVisibilityRestrict/org` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.updatePrefsBoardVisibilityRestrictPublicByIdOrg`<a id="trelloorganizationupdateprefsboardvisibilityrestrictpublicbyidorg"></a>

updateOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsBoardVisibilityRestrictPublicByIdOrgResponse =
  await trello.organization.updatePrefsBoardVisibilityRestrictPublicByIdOrg({
    idOrg: "idOrg_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### value: `string`<a id="value-string"></a>

One of: admin, none or org

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/prefs/boardVisibilityRestrict/public` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.updatePrefsExternalMembersDisabledByIdOrg`<a id="trelloorganizationupdateprefsexternalmembersdisabledbyidorg"></a>

updateOrganizationsPrefsExternalMembersDisabledByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsExternalMembersDisabledByIdOrgResponse =
  await trello.organization.updatePrefsExternalMembersDisabledByIdOrg({
    idOrg: "idOrg_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### value: `string`<a id="value-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/prefs/externalMembersDisabled` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.updatePrefsGoogleAppsVersionByIdOrg`<a id="trelloorganizationupdateprefsgoogleappsversionbyidorg"></a>

updateOrganizationsPrefsGoogleAppsVersionByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsGoogleAppsVersionByIdOrgResponse =
  await trello.organization.updatePrefsGoogleAppsVersionByIdOrg({
    idOrg: "idOrg_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### value: `string`<a id="value-string"></a>

a number from 1 to 2

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/prefs/googleAppsVersion` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.updatePrefsOrgInviteRestrictByIdOrg`<a id="trelloorganizationupdateprefsorginviterestrictbyidorg"></a>

updateOrganizationsPrefsOrgInviteRestrictByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsOrgInviteRestrictByIdOrgResponse =
  await trello.organization.updatePrefsOrgInviteRestrictByIdOrg({
    idOrg: "idOrg_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### value: `string`<a id="value-string"></a>

An email address with optional expansion tokens

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/prefs/orgInviteRestrict` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.updatePrefsPermissionLevelByIdOrg`<a id="trelloorganizationupdateprefspermissionlevelbyidorg"></a>

updateOrganizationsPrefsPermissionLevelByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsPermissionLevelByIdOrgResponse =
  await trello.organization.updatePrefsPermissionLevelByIdOrg({
    idOrg: "idOrg_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### value: `string`<a id="value-string"></a>

One of: private or public

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/prefs/permissionLevel` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.updatePrefsVisibilityByIdOrg`<a id="trelloorganizationupdateprefsvisibilitybyidorg"></a>

updateOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsVisibilityByIdOrgResponse =
  await trello.organization.updatePrefsVisibilityByIdOrg({
    idOrg: "idOrg_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### value: `string`<a id="value-string"></a>

One of: admin, none or org

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/prefs/boardVisibilityRestrict/private` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.updateWebsiteByIdOrg`<a id="trelloorganizationupdatewebsitebyidorg"></a>

updateOrganizationsWebsiteByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWebsiteByIdOrgResponse =
  await trello.organization.updateWebsiteByIdOrg({
    idOrg: "idOrg_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### value: `string`<a id="value-string"></a>

A URL starting with http:// or https:// or null

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/website` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.organization.uploadLogoByIdOrg`<a id="trelloorganizationuploadlogobyidorg"></a>

addOrganizationsLogoByIdOrg()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadLogoByIdOrgResponse = await trello.organization.uploadLogoByIdOrg({
  idOrg: "idOrg_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idOrg: `string`<a id="idorg-string"></a>

idOrg or name

##### file: `string`<a id="file-string"></a>

A file

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organizations/{idOrg}/logo` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.search.findMembers`<a id="trellosearchfindmembers"></a>

getSearchMembers()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findMembersResponse = await trello.search.findMembers({
  query: "query_example",
  limit: "8",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `string`<a id="query-string"></a>

a string with a length from 1 to 16384

##### limit: `string`<a id="limit-string"></a>

a number from 1 to 20

##### idBoard: `string`<a id="idboard-string"></a>

An id, or null

##### idOrganization: `string`<a id="idorganization-string"></a>

An id, or null

##### onlyOrgMembers: `string`<a id="onlyorgmembers-string"></a>

A boolean

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/search/members` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.search.getResults`<a id="trellosearchgetresults"></a>

getSearch()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResultsResponse = await trello.search.getResults({
  query: "query_example",
  idBoards: "mine",
  idOrganizations: "idOrganizations_example",
  modelTypes: "all",
  boardFields: "name and idOrganization",
  boardsLimit: "10",
  cardFields: "all",
  cardsLimit: "10",
  cardsPage: "0",
  organizationFields: "name and displayName",
  organizationsLimit: "10",
  memberFields: "avatarHash, fullName, initials, username and confirmed",
  membersLimit: "10",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `string`<a id="query-string"></a>

a string with a length from 1 to 16384

##### idOrganizations: `string`<a id="idorganizations-string"></a>

A comma-separated list of objectIds, 24-character hex strings

##### idBoards: `string`<a id="idboards-string"></a>

A comma-separated list of objectIds, 24-character hex strings

##### idCards: `string`<a id="idcards-string"></a>

A comma-separated list of objectIds, 24-character hex strings

##### modelTypes: `string`<a id="modeltypes-string"></a>

all or a comma-separated list of: actions, boards, cards, members or organizations

##### boardFields: `string`<a id="boardfields-string"></a>

all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url

##### boardsLimit: `string`<a id="boardslimit-string"></a>

a number from 1 to 1000

##### cardFields: `string`<a id="cardfields-string"></a>

all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url

##### cardsLimit: `string`<a id="cardslimit-string"></a>

a number from 1 to 1000

##### cardsPage: `string`<a id="cardspage-string"></a>

a number from 0 to 100

##### cardBoard: `string`<a id="cardboard-string"></a>

 true or false

##### cardList: `string`<a id="cardlist-string"></a>

 true or false

##### cardMembers: `string`<a id="cardmembers-string"></a>

 true or false

##### cardStickers: `string`<a id="cardstickers-string"></a>

 true or false

##### cardAttachments: `string`<a id="cardattachments-string"></a>

A boolean value or &quot;cover&quot; for only card cover attachments

##### organizationFields: `string`<a id="organizationfields-string"></a>

all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website

##### organizationsLimit: `string`<a id="organizationslimit-string"></a>

a number from 1 to 1000

##### memberFields: `string`<a id="memberfields-string"></a>

all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username

##### membersLimit: `string`<a id="memberslimit-string"></a>

a number from 1 to 1000

##### partial: `string`<a id="partial-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.session.createAndUpdate`<a id="trellosessioncreateandupdate"></a>

addSessions()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createAndUpdateResponse = await trello.session.createAndUpdate({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idBoard: `string`<a id="idboard-string"></a>

The id of the board you&#39;re viewing.  Boards with no viewers will not get updates about members&#39; statuses.

##### status: `string`<a id="status-string"></a>

One of: active, disconnected or idle

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sessions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.session.getSocketSessions`<a id="trellosessiongetsocketsessions"></a>

This is the route for WebSocket requests.  See the socket API reference for a description of WebSocket usage.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSocketSessionsResponse = await trello.session.getSocketSessions();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sessions/socket` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.session.updateStatusByIdSession`<a id="trellosessionupdatestatusbyidsession"></a>

updateSessionsByIdSession()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateStatusByIdSessionResponse =
  await trello.session.updateStatusByIdSession({
    idSession: "idSession_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idSession: `string`<a id="idsession-string"></a>

idSession

##### idBoard: `string`<a id="idboard-string"></a>

The id of the board you&#39;re viewing.  Boards with no viewers will not get updates about members&#39; statuses.

##### status: `string`<a id="status-string"></a>

One of: active, disconnected or idle

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sessions/{idSession}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.session.updateStatusByIdSession_0`<a id="trellosessionupdatestatusbyidsession_0"></a>

updateSessionsStatusByIdSession()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateStatusByIdSession_0Response =
  await trello.session.updateStatusByIdSession_0({
    idSession: "idSession_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idSession: `string`<a id="idsession-string"></a>

idSession

##### value: `string`<a id="value-string"></a>

One of: active, disconnected or idle

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sessions/{idSession}/status` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.token.deleteByToken`<a id="trellotokendeletebytoken"></a>

deleteTokensByToken()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByTokenResponse = await trello.token.deleteByToken();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tokens/{token}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.token.getByToken`<a id="trellotokengetbytoken"></a>

getTokensByToken()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByTokenResponse = await trello.token.getByToken({
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: dateCreated, dateExpires, idMember, identifier or permissions

##### webhooks: `string`<a id="webhooks-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tokens/{token}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.token.getByTokenByField`<a id="trellotokengetbytokenbyfield"></a>

getTokensByTokenByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByTokenByFieldResponse = await trello.token.getByTokenByField({
  token: "token_example",
  field: "field_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

token

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tokens/{token}/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.token.getMemberByField`<a id="trellotokengetmemberbyfield"></a>

getTokensMemberByTokenByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMemberByFieldResponse = await trello.token.getMemberByField({
  field: "field_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tokens/{token}/member/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.token.getMemberByToken`<a id="trellotokengetmemberbytoken"></a>

getTokensMemberByToken()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMemberByTokenResponse = await trello.token.getMemberByToken({
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`<a id="fields-string"></a>

all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tokens/{token}/member` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.token.getWebhookById`<a id="trellotokengetwebhookbyid"></a>

getTokensWebhooksByTokenByIdWebhook()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWebhookByIdResponse = await trello.token.getWebhookById({
  idWebhook: "idWebhook_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idWebhook: `string`<a id="idwebhook-string"></a>

idWebhook

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tokens/{token}/webhooks/{idWebhook}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.token.getWebhooks`<a id="trellotokengetwebhooks"></a>

getTokensWebhooksByToken()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWebhooksResponse = await trello.token.getWebhooks();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tokens/{token}/webhooks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.token.registerWebhook`<a id="trellotokenregisterwebhook"></a>

addTokensWebhooksByToken()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const registerWebhookResponse = await trello.token.registerWebhook({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

a string with a length from 0 to 16384

##### callbackURL: `string`<a id="callbackurl-string"></a>

A valid URL that is reachable with a HEAD request

##### idModel: `string`<a id="idmodel-string"></a>

id of the model to be monitored

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tokens/{token}/webhooks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.token.removeByTokenByIdWebhook`<a id="trellotokenremovebytokenbyidwebhook"></a>

deleteTokensWebhooksByTokenByIdWebhook()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByTokenByIdWebhookResponse =
  await trello.token.removeByTokenByIdWebhook({
    idWebhook: "idWebhook_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idWebhook: `string`<a id="idwebhook-string"></a>

idWebhook

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tokens/{token}/webhooks/{idWebhook}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.token.updateWebhooksByToken`<a id="trellotokenupdatewebhooksbytoken"></a>

updateTokensWebhooksByToken()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWebhooksByTokenResponse = await trello.token.updateWebhooksByToken(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

a string with a length from 0 to 16384

##### callbackURL: `string`<a id="callbackurl-string"></a>

A valid URL that is reachable with a HEAD request

##### idModel: `string`<a id="idmodel-string"></a>

id of the model to be monitored

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tokens/{token}/webhooks` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.type.getById`<a id="trellotypegetbyid"></a>

getTypesById()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await trello.type.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/types/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.webhook.getById`<a id="trellowebhookgetbyid"></a>

getWebhooksByIdWebhook()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await trello.webhook.getById({
  idWebhook: "idWebhook_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idWebhook: `string`<a id="idwebhook-string"></a>

idWebhook

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{idWebhook}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.webhook.getByIdField`<a id="trellowebhookgetbyidfield"></a>

getWebhooksByIdWebhookByField()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdFieldResponse = await trello.webhook.getByIdField({
  idWebhook: "idWebhook_example",
  field: "field_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idWebhook: `string`<a id="idwebhook-string"></a>

idWebhook

##### field: `string`<a id="field-string"></a>

field

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{idWebhook}/{field}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.webhook.removeById`<a id="trellowebhookremovebyid"></a>

deleteWebhooksByIdWebhook()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdResponse = await trello.webhook.removeById({
  idWebhook: "idWebhook_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idWebhook: `string`<a id="idwebhook-string"></a>

idWebhook

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{idWebhook}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.webhook.update`<a id="trellowebhookupdate"></a>

updateWebhooks()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateResponse = await trello.webhook.update({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

a string with a length from 0 to 16384

##### active: `string`<a id="active-string"></a>

 true or false

##### callbackURL: `string`<a id="callbackurl-string"></a>

A valid URL that is reachable with a HEAD request

##### idModel: `string`<a id="idmodel-string"></a>

id of the model that should be hooked

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.webhook.updateActiveById`<a id="trellowebhookupdateactivebyid"></a>

updateWebhooksActiveByIdWebhook()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateActiveByIdResponse = await trello.webhook.updateActiveById({
  idWebhook: "idWebhook_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idWebhook: `string`<a id="idwebhook-string"></a>

idWebhook

##### value: `string`<a id="value-string"></a>

 true or false

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{idWebhook}/active` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.webhook.updateByIdWebhook`<a id="trellowebhookupdatebyidwebhook"></a>

updateWebhooksByIdWebhook()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdWebhookResponse = await trello.webhook.updateByIdWebhook({
  idWebhook: "idWebhook_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idWebhook: `string`<a id="idwebhook-string"></a>

idWebhook

##### description: `string`<a id="description-string"></a>

a string with a length from 0 to 16384

##### active: `string`<a id="active-string"></a>

 true or false

##### callbackURL: `string`<a id="callbackurl-string"></a>

A valid URL that is reachable with a HEAD request

##### idModel: `string`<a id="idmodel-string"></a>

id of the model that should be hooked

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{idWebhook}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.webhook.updateCallbackUrlById`<a id="trellowebhookupdatecallbackurlbyid"></a>

updateWebhooksCallbackURLByIdWebhook()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCallbackUrlByIdResponse =
  await trello.webhook.updateCallbackUrlById({
    idWebhook: "idWebhook_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idWebhook: `string`<a id="idwebhook-string"></a>

idWebhook

##### value: `string`<a id="value-string"></a>

A valid URL that is reachable with a HEAD request

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{idWebhook}/callbackURL` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.webhook.updateDescriptionByIdWebhook`<a id="trellowebhookupdatedescriptionbyidwebhook"></a>

updateWebhooksDescriptionByIdWebhook()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDescriptionByIdWebhookResponse =
  await trello.webhook.updateDescriptionByIdWebhook({
    idWebhook: "idWebhook_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idWebhook: `string`<a id="idwebhook-string"></a>

idWebhook

##### value: `string`<a id="value-string"></a>

a string with a length from 0 to 16384

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{idWebhook}/description` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `trello.webhook.updateModelById`<a id="trellowebhookupdatemodelbyid"></a>

updateWebhooksIdModelByIdWebhook()

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateModelByIdResponse = await trello.webhook.updateModelById({
  idWebhook: "idWebhook_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idWebhook: `string`<a id="idwebhook-string"></a>

idWebhook

##### value: `string`<a id="value-string"></a>

id of the model to be monitored

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{idWebhook}/idModel` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
