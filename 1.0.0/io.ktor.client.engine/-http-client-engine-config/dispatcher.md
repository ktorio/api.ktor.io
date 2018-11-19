---
title: HttpClientEngineConfig.dispatcher - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.engine</a> / <a href="index.html">HttpClientEngineConfig</a> / <a href="./dispatcher.html">dispatcher</a></div>

# dispatcher

<div class="signature"><code><span class="keyword">var </span><s><span class="identifier">dispatcher</span></s><span class="symbol">: </span><span class="identifier">CoroutineDispatcher</span><span class="symbol">?</span></code></div>

**Deprecated:** Custom dispatcher is deprecated. Consider using threadsCount instead.

The <a href="#">CoroutineDispatcher</a> that will be used for the client requests.

