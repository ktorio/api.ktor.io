---
title: ConditionalHeaders.versionsFor - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="index.html">ConditionalHeaders</a> / <a href="./versions-for.html">versionsFor</a></div>

# versionsFor

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">versionsFor</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.ConditionalHeaders$versionsFor(io.ktor.http.content.OutgoingContent)/content">content</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.http.content/-version/index.html"><span class="identifier">Version</span></a><span class="symbol">&gt;</span></code></div>

Retrieves versions such as <a href="../../io.ktor.http.content/-last-modified-version/index.html">LastModifiedVersion</a> or <a href="../../io.ktor.http.content/-entity-tag-version/index.html">EntityTagVersion</a> for a given content

