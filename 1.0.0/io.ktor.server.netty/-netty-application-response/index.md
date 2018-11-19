---
title: NettyApplicationResponse - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.netty</a> / <a href="./index.html">NettyApplicationResponse</a></div>

# NettyApplicationResponse

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">NettyApplicationResponse</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../io.ktor.server.engine/-base-application-response/index.html"><span class="identifier">BaseApplicationResponse</span></a></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">NettyApplicationResponse</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.netty.NettyApplicationResponse$<init>(io.ktor.server.netty.NettyApplicationCall, io.netty.channel.ChannelHandlerContext, , )/call">call</span><span class="symbol">:</span>&nbsp;<a href="../-netty-application-call/index.html"><span class="identifier">NettyApplicationCall</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.netty.NettyApplicationResponse$<init>(io.ktor.server.netty.NettyApplicationCall, io.netty.channel.ChannelHandlerContext, , )/context">context</span><span class="symbol">:</span>&nbsp;<span class="identifier">ChannelHandlerContext</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.netty.NettyApplicationResponse$<init>(io.ktor.server.netty.NettyApplicationCall, io.netty.channel.ChannelHandlerContext, , )/engineContext">engineContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.netty.NettyApplicationResponse$<init>(io.ktor.server.netty.NettyApplicationCall, io.netty.channel.ChannelHandlerContext, , )/userContext">userContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="context.html">context</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">context</span><span class="symbol">: </span><span class="identifier">ChannelHandlerContext</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="engine-context.html">engineContext</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">engineContext</span><span class="symbol">: </span><span class="identifier">&lt;ERROR CLASS&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="response-message.html">responseMessage</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">responseMessage</span><span class="symbol">: </span><span class="identifier">CompletableDeferred</span><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="response-message-sent.html">responseMessageSent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">responseMessageSent</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="user-context.html">userContext</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">userContext</span><span class="symbol">: </span><span class="identifier">&lt;ERROR CLASS&gt;</span></code></div>

</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/-base-application-response/buffer-pool.html">bufferPool</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">val </span><span class="identifier">bufferPool</span><span class="symbol">: </span><span class="identifier">ObjectPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">&gt;</span></code></div>

ByteBuffer pool


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/-base-application-response/call.html">call</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">val </span><span class="identifier">call</span><span class="symbol">: </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a></code></div>

<a href="../../io.ktor.application/-application-call/index.html">ApplicationCall</a> instance this ApplicationResponse is attached to


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/-base-application-response/cookies.html">cookies</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">val </span><span class="identifier">cookies</span><span class="symbol">: </span><a href="../../io.ktor.response/-response-cookies/index.html"><span class="identifier">ResponseCookies</span></a></code></div>

Cookies for this response


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/-base-application-response/pipeline.html">pipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">pipeline</span><span class="symbol">: </span><a href="../../io.ktor.response/-application-send-pipeline/index.html"><span class="identifier">ApplicationSendPipeline</span></a></code></div>

Pipeline for sending content


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="cancel.html">cancel</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">cancel</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="respond-from-bytes.html">respondFromBytes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">respondFromBytes</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.netty.NettyApplicationResponse$respondFromBytes(kotlin.ByteArray)/bytes">bytes</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Respond with <a href="respond-from-bytes.html#io.ktor.server.netty.NettyApplicationResponse$respondFromBytes(kotlin.ByteArray)/bytes">bytes</a> content


</td>
</tr>
<tr>
<td markdown="1">

<a href="respond-no-content.html">respondNoContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">respondNoContent</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.netty.NettyApplicationResponse$respondNoContent(io.ktor.http.content.OutgoingContent.NoContent)/content">content</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.content/-outgoing-content/-no-content/index.html"><span class="identifier">NoContent</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Process response with no content


</td>
</tr>
<tr>
<td markdown="1">

<a href="respond-outgoing-content.html">respondOutgoingContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">respondOutgoingContent</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.netty.NettyApplicationResponse$respondOutgoingContent(io.ktor.http.content.OutgoingContent)/content">content</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Process response outgoing <a href="respond-outgoing-content.html#io.ktor.server.netty.NettyApplicationResponse$respondOutgoingContent(io.ktor.http.content.OutgoingContent)/content">content</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="response-channel.html">responseChannel</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">responseChannel</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteWriteChannel</span></code></div>

Get response output channel


</td>
</tr>
<tr>
<td markdown="1">

<a href="response-message.html">responseMessage</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">responseMessage</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.netty.NettyApplicationResponse$responseMessage(kotlin.Boolean, kotlin.Boolean)/chunked">chunked</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.netty.NettyApplicationResponse$responseMessage(kotlin.Boolean, kotlin.Boolean)/last">last</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a></code></div>

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">responseMessage</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.netty.NettyApplicationResponse$responseMessage(kotlin.Boolean, kotlin.ByteArray)/chunked">chunked</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.netty.NettyApplicationResponse$responseMessage(kotlin.Boolean, kotlin.ByteArray)/data">data</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/-base-application-response/commit-headers.html">commitHeaders</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">commitHeaders</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.engine.BaseApplicationResponse$commitHeaders(io.ktor.http.content.OutgoingContent)/content">content</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Commit header values and status and pass them to the underlying engine


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/-base-application-response/push.html">push</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">push</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.engine.BaseApplicationResponse$push(io.ktor.response.ResponsePushBuilder)/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.response/-response-push-builder/index.html"><span class="identifier">ResponsePushBuilder</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Produces HTTP/2 push from server to client or sets HTTP/1.x hint header
or does nothing. Exact behaviour is up to engine implementation.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/-base-application-response/respond-from-channel.html">respondFromChannel</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">respondFromChannel</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.BaseApplicationResponse$respondFromChannel(kotlinx.coroutines.io.ByteReadChannel)/readChannel">readChannel</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Respond from <a href="../../io.ktor.server.engine/-base-application-response/respond-from-channel.html#io.ktor.server.engine.BaseApplicationResponse$respondFromChannel(kotlinx.coroutines.io.ByteReadChannel)/readChannel">readChannel</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/-base-application-response/respond-upgrade.html">respondUpgrade</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">respondUpgrade</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.BaseApplicationResponse$respondUpgrade(io.ktor.http.content.OutgoingContent.ProtocolUpgrade)/upgrade">upgrade</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.content/-outgoing-content/-protocol-upgrade/index.html"><span class="identifier">ProtocolUpgrade</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Process upgrade response


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/-base-application-response/respond-write-channel-content.html">respondWriteChannelContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">respondWriteChannelContent</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.BaseApplicationResponse$respondWriteChannelContent(io.ktor.http.content.OutgoingContent.WriteChannelContent)/content">content</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.content/-outgoing-content/-write-channel-content/index.html"><span class="identifier">WriteChannelContent</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Process response <a href="../../io.ktor.server.engine/-base-application-response/respond-write-channel-content.html#io.ktor.server.engine.BaseApplicationResponse$respondWriteChannelContent(io.ktor.http.content.OutgoingContent.WriteChannelContent)/content">content</a> using <a href="../../io.ktor.http.content/-outgoing-content/-write-channel-content/write-to.html">OutgoingContent.WriteChannelContent.writeTo</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/-base-application-response/set-status.html">setStatus</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">setStatus</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.engine.BaseApplicationResponse$setStatus(io.ktor.http.HttpStatusCode)/statusCode">statusCode</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set underlying engine's response status


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/-base-application-response/status.html">status</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">status</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span></code></div>

Currently set status code for this response, or null if none was set

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">status</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.engine.BaseApplicationResponse$status(io.ktor.http.HttpStatusCode)/value">value</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set status for this response


</td>
</tr>
</tbody>
</table>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="response-status-cache.html">responseStatusCache</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">responseStatusCache</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html"><span class="identifier">Array</span></a><span class="symbol">&lt;</span><span class="identifier">HttpResponseStatus</span><span class="symbol">?</span><span class="symbol">&gt;</span></code></div>

</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/cache-control.html">cacheControl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">cacheControl</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$cacheControl(io.ktor.response.ApplicationResponse, io.ktor.http.CacheControl)/value">value</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-cache-control/index.html"><span class="identifier">CacheControl</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append response <code>Cache-Control</code> HTTP header <a href="../../io.ktor.response/cache-control.html#io.ktor.response$cacheControl(io.ktor.response.ApplicationResponse, io.ktor.http.CacheControl)/value">value</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/content-length.html">contentLength</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><s><span class="identifier">contentLength</span></s><span class="symbol">(</span><span class="parameterName" id="io.ktor.response$contentLength(io.ktor.response.ApplicationResponse, kotlin.Long)/length">length</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/content-range.html">contentRange</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">contentRange</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, io.ktor.http.RangeUnits)/range">range</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-long-range/index.html"><span class="identifier">LongRange</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, io.ktor.http.RangeUnits)/fullLength">fullLength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, io.ktor.http.RangeUnits)/unit">unit</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-range-units/index.html"><span class="identifier">RangeUnits</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">contentRange</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/range">range</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-long-range/index.html"><span class="identifier">LongRange</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/fullLength">fullLength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/unit">unit</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;RangeUnits.Bytes.unitToken<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append response <code>Content-Range</code> header with specified <a href="../../io.ktor.response/content-range.html#io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, io.ktor.http.RangeUnits)/range">range</a> and <a href="../../io.ktor.response/content-range.html#io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, io.ktor.http.RangeUnits)/fullLength">fullLength</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><s><span class="identifier">contentType</span></s><span class="symbol">(</span><span class="parameterName" id="io.ktor.response$contentType(io.ktor.response.ApplicationResponse, io.ktor.http.ContentType)/value">value</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><s><span class="identifier">contentType</span></s><span class="symbol">(</span><span class="parameterName" id="io.ktor.response$contentType(io.ktor.response.ApplicationResponse, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/etag.html">etag</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">etag</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.response$etag(io.ktor.response.ApplicationResponse, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append response <code>E-Tag</code> HTTP header <a href="../../io.ktor.response/etag.html#io.ktor.response$etag(io.ktor.response.ApplicationResponse, kotlin.String)/value">value</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/expires.html">expires</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">expires</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.response$expires(io.ktor.response.ApplicationResponse, java.time.LocalDateTime)/value">value</span><span class="symbol">:</span>&nbsp;<span class="identifier">LocalDateTime</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append response <code>Expires</code> HTTP header <a href="../../io.ktor.response/expires.html#io.ktor.response$expires(io.ktor.response.ApplicationResponse, java.time.LocalDateTime)/value">value</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/header.html">header</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append HTTP response header with string <a href="../../io.ktor.response/header.html#io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.String)/value">value</a>

<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Int)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Int)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append HTTP response header with integer numeric <a href="../../io.ktor.response/header.html#io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Int)/value">value</a>

<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Long)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Long)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append HTTP response header with long integer numeric <a href="../../io.ktor.response/header.html#io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Long)/value">value</a>

<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, java.time.temporal.Temporal)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, java.time.temporal.Temporal)/date">date</span><span class="symbol">:</span>&nbsp;<span class="identifier">Temporal</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append HTTP response header with temporal <a href="../../io.ktor.response/header.html#io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, java.time.temporal.Temporal)/date">date</a> (date, time and so on)


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/last-modified.html">lastModified</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">lastModified</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$lastModified(io.ktor.response.ApplicationResponse, java.time.ZonedDateTime)/dateTime">dateTime</span><span class="symbol">:</span>&nbsp;<span class="identifier">ZonedDateTime</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append response <code>Last-Modified</code> HTTP header value from <a href="../../io.ktor.response/last-modified.html#io.ktor.response$lastModified(io.ktor.response.ApplicationResponse, java.time.ZonedDateTime)/dateTime">dateTime</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/link.html">link</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">link</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$link(io.ktor.response.ApplicationResponse, io.ktor.http.LinkHeader)/header">header</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-link-header/index.html"><span class="identifier">LinkHeader</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append <code>Link</code> header to HTTP response

<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">link</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$link(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Array((kotlin.String)))/uri">uri</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.http$link(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Array((kotlin.String)))/rel">rel</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append <code>Link</code> header to HTTP response with specified <a href="../../io.ktor.http/link.html#io.ktor.http$link(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Array((kotlin.String)))/uri">uri</a> and <a href="../../io.ktor.http/link.html#io.ktor.http$link(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Array((kotlin.String)))/rel">rel</a>


</td>
</tr>
</tbody>
</table>
