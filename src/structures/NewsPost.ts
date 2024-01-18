export default class NewsPost {
	/** ID for this post */
	id: string;

	/** Title for this post */
	title: string;

	/** Link to this post */
	url: string;

	/** Whether the URL is external */
	urlExternal: boolean;

	/** Name of the post's author */
	author: string;

	/** Content of the post */
	content: string;

	/** Unix Timestamp for when the post was published  */
	publishedTimestamp: number;

	/** Human readable label to be display on feed */
	feed: string;

	/** API name of feed this was posted to */
	feedName: string;

	/** Feed type. Not sure what this is. Seems to always be 1 */
	feedType: number;

	/** App ID this news pertains to */
	appID: number;

	/** Tags associated with this post */
	tags?: string[];

	constructor(data: any) {
		this.id = data.gid;
		this.title = data.title;
		this.url = data.url;
		this.urlExternal = data.is_external_url;
		this.author = data.author;
		this.content = data.contents;
		this.publishedTimestamp = data.date;
		this.feed = data.feedlabel;
		this.feedName = data.feedname;
		this.feedType = data.feed_type;
		this.appID = data.appid;
		this.tags = data.tags;
	}

	/** Date when this post was published */
	get publishedAt() {
		return new Date(this.publishedTimestamp * 1000);
	}
}
