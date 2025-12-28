interface NewsSource {
    fetchNews(): string[];
}

class RSSFeedSource implements NewsSource {
    fetchNews(): string[] {
        return ["RSS News 1", "RSS News 2"];
    }
}

class APISource implements NewsSource {
    fetchNews(): string[] {
        return ["API News 1", "API News 2"];
    }
}

class NewsAggregator {
    private source: NewsSource;
    constructor(source: NewsSource) {
        this.source = source;
    }
    getLatestNews(): void {
        const news = this.source.fetchNews();
        console.log("Latest news:", news.join(", "));
    }
}

class Container {
    private services: Map<string, NewsSource> = new Map();
    register(name: string, instance: NewsSource) {
        this.services.set(name, instance);
    }
    resolve(name: string): NewsSource | undefined {
        return this.services.get(name);
    }
}

const container = new Container();
container.register("RSS", new RSSFeedSource());
container.register("API", new APISource());
const rssAggregator = new NewsAggregator(container.resolve("RSS")!);
rssAggregator.getLatestNews();
const apiAggregator = new NewsAggregator(container.resolve("API")!);
apiAggregator.getLatestNews();

class MockSource implements NewsSource {
    fetchNews(): string[] {
        return ["Mock News 1", "Mock News 2"];
    }
}
const mockAggregator = new NewsAggregator(new MockSource());
mockAggregator.getLatestNews(); 