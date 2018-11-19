---
title: defaultTextContentType - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.response</a> / <a href="./default-text-content-type.html">defaultTextContentType</a></div>

# defaultTextContentType

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">defaultTextContentType</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$defaultTextContentType(io.ktor.application.ApplicationCall, io.ktor.http.ContentType)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a></code></div>

Creates a default <a href="../io.ktor.http/-content-type/index.html">ContentType</a> based on the given <a href="default-text-content-type.html#io.ktor.response$defaultTextContentType(io.ktor.application.ApplicationCall, io.ktor.http.ContentType)/contentType">contentType</a> and current call

If <a href="default-text-content-type.html#io.ktor.response$defaultTextContentType(io.ktor.application.ApplicationCall, io.ktor.http.ContentType)/contentType">contentType</a> is null, it tries to fetch already set response header "Content-Type". If the header is not available
<code>text/plain</code> is used. If <a href="default-text-content-type.html#io.ktor.response$defaultTextContentType(io.ktor.application.ApplicationCall, io.ktor.http.ContentType)/contentType">contentType</a> is specified, it uses it

Additionally, if charset is not set for either content type, it appends <code>; charset=UTF-8</code> to the content type.

