---
title: AndroidHttpResponse - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.engine.android</a> / <a href="./index.html">AndroidHttpResponse</a></div>

# AndroidHttpResponse

<div class="signature"><code><span class="keyword">class </span><span class="identifier">AndroidHttpResponse</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.response/-http-response/index.html"><span class="identifier">HttpResponse</span></a></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">AndroidHttpResponse</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.android.AndroidHttpResponse$<init>(io.ktor.client.call.HttpClientCall, kotlinx.coroutines.io.ByteReadChannel, io.ktor.http.Headers, io.ktor.util.date.GMTDate, io.ktor.util.date.GMTDate, io.ktor.http.HttpStatusCode, io.ktor.http.HttpProtocolVersion, , java.net.HttpURLConnection)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.call/-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.android.AndroidHttpResponse$<init>(io.ktor.client.call.HttpClientCall, kotlinx.coroutines.io.ByteReadChannel, io.ktor.http.Headers, io.ktor.util.date.GMTDate, io.ktor.util.date.GMTDate, io.ktor.http.HttpStatusCode, io.ktor.http.HttpProtocolVersion, , java.net.HttpURLConnection)/content">content</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.android.AndroidHttpResponse$<init>(io.ktor.client.call.HttpClientCall, kotlinx.coroutines.io.ByteReadChannel, io.ktor.http.Headers, io.ktor.util.date.GMTDate, io.ktor.util.date.GMTDate, io.ktor.http.HttpStatusCode, io.ktor.http.HttpProtocolVersion, , java.net.HttpURLConnection)/headers">headers</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.android.AndroidHttpResponse$<init>(io.ktor.client.call.HttpClientCall, kotlinx.coroutines.io.ByteReadChannel, io.ktor.http.Headers, io.ktor.util.date.GMTDate, io.ktor.util.date.GMTDate, io.ktor.http.HttpStatusCode, io.ktor.http.HttpProtocolVersion, , java.net.HttpURLConnection)/requestTime">requestTime</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.date/-g-m-t-date/index.html"><span class="identifier">GMTDate</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.android.AndroidHttpResponse$<init>(io.ktor.client.call.HttpClientCall, kotlinx.coroutines.io.ByteReadChannel, io.ktor.http.Headers, io.ktor.util.date.GMTDate, io.ktor.util.date.GMTDate, io.ktor.http.HttpStatusCode, io.ktor.http.HttpProtocolVersion, , java.net.HttpURLConnection)/responseTime">responseTime</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.date/-g-m-t-date/index.html"><span class="identifier">GMTDate</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.android.AndroidHttpResponse$<init>(io.ktor.client.call.HttpClientCall, kotlinx.coroutines.io.ByteReadChannel, io.ktor.http.Headers, io.ktor.util.date.GMTDate, io.ktor.util.date.GMTDate, io.ktor.http.HttpStatusCode, io.ktor.http.HttpProtocolVersion, , java.net.HttpURLConnection)/status">status</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.android.AndroidHttpResponse$<init>(io.ktor.client.call.HttpClientCall, kotlinx.coroutines.io.ByteReadChannel, io.ktor.http.Headers, io.ktor.util.date.GMTDate, io.ktor.util.date.GMTDate, io.ktor.http.HttpStatusCode, io.ktor.http.HttpProtocolVersion, , java.net.HttpURLConnection)/version">version</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-protocol-version/index.html"><span class="identifier">HttpProtocolVersion</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.android.AndroidHttpResponse$<init>(io.ktor.client.call.HttpClientCall, kotlinx.coroutines.io.ByteReadChannel, io.ktor.http.Headers, io.ktor.util.date.GMTDate, io.ktor.util.date.GMTDate, io.ktor.http.HttpStatusCode, io.ktor.http.HttpProtocolVersion, , java.net.HttpURLConnection)/coroutineContext">coroutineContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.android.AndroidHttpResponse$<init>(io.ktor.client.call.HttpClientCall, kotlinx.coroutines.io.ByteReadChannel, io.ktor.http.Headers, io.ktor.util.date.GMTDate, io.ktor.util.date.GMTDate, io.ktor.http.HttpStatusCode, io.ktor.http.HttpProtocolVersion, , java.net.HttpURLConnection)/connection">connection</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/net/HttpURLConnection.html"><span class="identifier">HttpURLConnection</span></a><span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="call.html">call</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">call</span><span class="symbol">: </span><a href="../../io.ktor.client.call/-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a></code></div>

The associated <a href="../../io.ktor.client.call/-http-client-call/index.html">HttpClientCall</a> containing both
the underlying <a href="../../io.ktor.client.call/-http-client-call/request.html">HttpClientCall.request</a> and <a href="../../io.ktor.client.call/-http-client-call/response.html">HttpClientCall.response</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="content.html">content</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">content</span><span class="symbol">: </span><span class="identifier">ByteReadChannel</span></code></div>

<a href="#">ByteReadChannel</a> with the payload of the response.


</td>
</tr>
<tr>
<td markdown="1">

<a href="coroutine-context.html">coroutineContext</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">coroutineContext</span><span class="symbol">: </span><span class="identifier">&lt;ERROR CLASS&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="headers.html">headers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">headers</span><span class="symbol">: </span><a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a></code></div>

Message <a href="../../io.ktor.http/-headers/index.html">Headers</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="request-time.html">requestTime</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">requestTime</span><span class="symbol">: </span><a href="../../io.ktor.util.date/-g-m-t-date/index.html"><span class="identifier">GMTDate</span></a></code></div>

<a href="../../io.ktor.util.date/-g-m-t-date/index.html">GMTDate</a> of the request start.


</td>
</tr>
<tr>
<td markdown="1">

<a href="response-time.html">responseTime</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">responseTime</span><span class="symbol">: </span><a href="../../io.ktor.util.date/-g-m-t-date/index.html"><span class="identifier">GMTDate</span></a></code></div>

<a href="../../io.ktor.util.date/-g-m-t-date/index.html">GMTDate</a> of the response start.


</td>
</tr>
<tr>
<td markdown="1">

<a href="status.html">status</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">status</span><span class="symbol">: </span><a href="../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a></code></div>

The <a href="../../io.ktor.http/-http-status-code/index.html">HttpStatusCode</a> returned by the server. It includes both,
the <a href="../../io.ktor.http/-http-status-code/description.html">HttpStatusCode.description</a> and the <a href="../../io.ktor.http/-http-status-code/value.html">HttpStatusCode.value</a> (code).


</td>
</tr>
<tr>
<td markdown="1">

<a href="version.html">version</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">version</span><span class="symbol">: </span><a href="../../io.ktor.http/-http-protocol-version/index.html"><span class="identifier">HttpProtocolVersion</span></a></code></div>

HTTP version. Usually <a href="../../io.ktor.http/-http-protocol-version/-h-t-t-p_1_1.html">HttpProtocolVersion.HTTP_1_1</a> or <a href="../../io.ktor.http/-http-protocol-version/-h-t-t-p_2_0.html">HttpProtocolVersion.HTTP_2_0</a>.


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.response/-http-response/execution-context.html">executionContext</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">val </span><s><span class="identifier">executionContext</span></s><span class="symbol">: </span><span class="identifier">Job</span></code></div>

A <a href="#">Job</a> representing the process of this response.


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="close.html">close</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">close</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/charset.html">charset</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message/index.html"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">charset</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">Charset</span><span class="symbol">?</span></code></div>

Parse charset from <code>Content-Type</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/content-length.html">contentLength</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message/index.html"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">contentLength</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span></code></div>

Parse <code>Content-Length</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message/index.html"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">contentType</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span></code></div>

Parse <code>Content-Type</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.cio/kotlinx.coroutines.-coroutine-scope/decode-chunked.html">decodeChunked</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">decodeChunked</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$decodeChunked(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel)/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.http.cio/-decoder-job.html"><span class="identifier">DecoderJob</span></a></code></div>

Start a chunked stream decoder coroutine


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.response/discard-remaining.html">discardRemaining</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.client.response/-http-response/index.html"><span class="identifier">HttpResponse</span></a><span class="symbol">.</span><span class="identifier">discardRemaining</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Efficiently discards the remaining bytes of <a href="../../io.ktor.client.response/-http-response/content.html">HttpResponse.content</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/kotlinx.coroutines.-coroutine-scope/embedded-server.html">embeddedServer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.server.engine/-application-engine/index.html"><span class="identifier">ApplicationEngine</span></a><span class="symbol">, </span><span class="identifier">TConfiguration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.server.engine/-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">&gt;</span> <span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">embeddedServer</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), , kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/factory">factory</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.server.engine/-application-engine-factory/index.html"><span class="identifier">ApplicationEngineFactory</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.server.engine/kotlinx.coroutines.-coroutine-scope/embedded-server.html#TEngine"><span class="identifier">TEngine</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.server.engine/kotlinx.coroutines.-coroutine-scope/embedded-server.html#TConfiguration"><span class="identifier">TConfiguration</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), , kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/port">port</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;80<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), , kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/host">host</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"0.0.0.0"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), , kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/watchPaths">watchPaths</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;emptyList()<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), , kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/parentCoroutineContext">parentCoroutineContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;EmptyCoroutineContext<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), , kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.server.engine/kotlinx.coroutines.-coroutine-scope/embedded-server.html#TConfiguration"><span class="identifier">TConfiguration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), , kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/module">module</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.server.engine/kotlinx.coroutines.-coroutine-scope/embedded-server.html#TEngine"><span class="identifier">TEngine</span></a></code></div>

Creates an embedded server with the given <a href="../../io.ktor.server.engine/kotlinx.coroutines.-coroutine-scope/embedded-server.html#io.ktor.server.engine$embeddedServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), , kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/factory">factory</a>, listening on <a href="../../io.ktor.server.engine/kotlinx.coroutines.-coroutine-scope/embedded-server.html#io.ktor.server.engine$embeddedServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), , kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/host">host</a>:<a href="../../io.ktor.server.engine/kotlinx.coroutines.-coroutine-scope/embedded-server.html#io.ktor.server.engine$embeddedServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), , kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/port">port</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/etag.html">etag</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message/index.html"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">etag</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Parse <code>E-Tag</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/expires.html">expires</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message/index.html"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">expires</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html"><span class="identifier">Date</span></a><span class="symbol">?</span></code></div>

Parse <code>Expires</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.cio/kotlinx.coroutines.-coroutine-scope/http-server.html">httpServer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">httpServer</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.cio$httpServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.cio.HttpServerSettings, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/settings">settings</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.server.cio/-http-server-settings/index.html"><span class="identifier">HttpServerSettings</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.cio$httpServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.cio.HttpServerSettings, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.cio/-http-request-handler.html"><span class="identifier">HttpRequestHandler</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.server.cio/-http-server/index.html"><span class="identifier">HttpServer</span></a></code></div>

Start an http server with <a href="../../io.ktor.server.cio/kotlinx.coroutines.-coroutine-scope/http-server.html#io.ktor.server.cio$httpServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.cio.HttpServerSettings, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/settings">settings</a> invoking <a href="../../io.ktor.server.cio/kotlinx.coroutines.-coroutine-scope/http-server.html#io.ktor.server.cio$httpServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.cio.HttpServerSettings, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/handler">handler</a> for every request


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/last-modified.html">lastModified</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message/index.html"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">lastModified</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html"><span class="identifier">Date</span></a><span class="symbol">?</span></code></div>

Parse <code>Last-Modified</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.cio/kotlinx.coroutines.-coroutine-scope/parse-multipart.html">parseMultipart</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">parseMultipart</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, io.ktor.http.cio.HttpHeadersMap)/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, io.ktor.http.cio.HttpHeadersMap)/headers">headers</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.cio/-http-headers-map/index.html"><span class="identifier">HttpHeadersMap</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ReceiveChannel</span><span class="symbol">&lt;</span><a href="../../io.ktor.http.cio/-multipart-event/index.html"><span class="identifier">MultipartEvent</span></a><span class="symbol">&gt;</span></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">parseMultipart</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlin.CharSequence, kotlin.Long)/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlin.CharSequence, kotlin.Long)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html"><span class="identifier">CharSequence</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlin.CharSequence, kotlin.Long)/contentLength">contentLength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ReceiveChannel</span><span class="symbol">&lt;</span><a href="../../io.ktor.http.cio/-multipart-event/index.html"><span class="identifier">MultipartEvent</span></a><span class="symbol">&gt;</span></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">parseMultipart</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, java.nio.ByteBuffer, kotlinx.coroutines.io.ByteReadChannel, kotlin.Long)/boundaryPrefixed">boundaryPrefixed</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, java.nio.ByteBuffer, kotlinx.coroutines.io.ByteReadChannel, kotlin.Long)/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, java.nio.ByteBuffer, kotlinx.coroutines.io.ByteReadChannel, kotlin.Long)/totalLength">totalLength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ReceiveChannel</span><span class="symbol">&lt;</span><a href="../../io.ktor.http.cio/-multipart-event/index.html"><span class="identifier">MultipartEvent</span></a><span class="symbol">&gt;</span></code></div>

Starts a multipart parser coroutine producing multipart events


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.cio.websocket/kotlinx.coroutines.-coroutine-scope/pinger.html">pinger</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">pinger</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$pinger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), java.time.Duration, java.time.Duration, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/outgoing">outgoing</span><span class="symbol">:</span>&nbsp;<span class="identifier">SendChannel</span><span class="symbol">&lt;</span><a href="../../io.ktor.http.cio.websocket/-frame/index.html"><span class="identifier">Frame</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$pinger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), java.time.Duration, java.time.Duration, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/period">period</span><span class="symbol">:</span>&nbsp;<span class="identifier">Duration</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$pinger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), java.time.Duration, java.time.Duration, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/timeout">timeout</span><span class="symbol">:</span>&nbsp;<span class="identifier">Duration</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$pinger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), java.time.Duration, java.time.Duration, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/pool">pool</span><span class="symbol">:</span>&nbsp;<span class="identifier">ObjectPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;KtorDefaultPool<br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">SendChannel</span><span class="symbol">&lt;</span><a href="../../io.ktor.http.cio.websocket/-frame/-pong/index.html"><span class="identifier">Pong</span></a><span class="symbol">&gt;</span></code></div>

Launch pinger coroutine on <a href="#">CoroutineScope</a> that is sending ping every specified <a href="../../io.ktor.http.cio.websocket/kotlinx.coroutines.-coroutine-scope/pinger.html#io.ktor.http.cio.websocket$pinger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), java.time.Duration, java.time.Duration, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/period">period</a> to <a href="../../io.ktor.http.cio.websocket/kotlinx.coroutines.-coroutine-scope/pinger.html#io.ktor.http.cio.websocket$pinger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), java.time.Duration, java.time.Duration, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/outgoing">outgoing</a> channel,
waiting for and verifying client's pong frames. It is also handling <a href="../../io.ktor.http.cio.websocket/kotlinx.coroutines.-coroutine-scope/pinger.html#io.ktor.http.cio.websocket$pinger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), java.time.Duration, java.time.Duration, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/timeout">timeout</a> and sending timeout close frame


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.cio.websocket/kotlinx.coroutines.-coroutine-scope/ponger.html">ponger</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">ponger</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$ponger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame.Pong)), kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/outgoing">outgoing</span><span class="symbol">:</span>&nbsp;<span class="identifier">SendChannel</span><span class="symbol">&lt;</span><a href="../../io.ktor.http.cio.websocket/-frame/-pong/index.html"><span class="identifier">Pong</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$ponger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame.Pong)), kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/pool">pool</span><span class="symbol">:</span>&nbsp;<span class="identifier">ObjectPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;KtorDefaultPool<br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">SendChannel</span><span class="symbol">&lt;</span><a href="../../io.ktor.http.cio.websocket/-frame/-ping/index.html"><span class="identifier">Ping</span></a><span class="symbol">&gt;</span></code></div>

Launch a ponger actor job on the <a href="#">CoroutineScope</a> sending pongs to <a href="../../io.ktor.http.cio.websocket/kotlinx.coroutines.-coroutine-scope/ponger.html#io.ktor.http.cio.websocket$ponger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame.Pong)), kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/outgoing">outgoing</a> channel.
It is acting for every client's ping frame and replying with corresponding pong


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.response/read-bytes.html">readBytes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.client.response/-http-response/index.html"><span class="identifier">HttpResponse</span></a><span class="symbol">.</span><span class="identifier">readBytes</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.response$readBytes(io.ktor.client.response.HttpResponse, kotlin.Int)/count">count</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a></code></div>

Exactly reads <a href="../../io.ktor.client.response/read-bytes.html#io.ktor.client.response$readBytes(io.ktor.client.response.HttpResponse, kotlin.Int)/count">count</a> bytes of the <a href="../../io.ktor.client.response/-http-response/content.html">HttpResponse.content</a>.

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.client.response/-http-response/index.html"><span class="identifier">HttpResponse</span></a><span class="symbol">.</span><span class="identifier">readBytes</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a></code></div>

Reads the whole <a href="../../io.ktor.client.response/-http-response/content.html">HttpResponse.content</a> if Content-Length was specified.
Otherwise it just reads one byte.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.response/read-text.html">readText</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.client.response/-http-response/index.html"><span class="identifier">HttpResponse</span></a><span class="symbol">.</span><span class="identifier">readText</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.response$readText(io.ktor.client.response.HttpResponse, java.nio.charset.Charset)/charset">charset</span><span class="symbol">:</span>&nbsp;<span class="identifier">Charset</span><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Read the <a href="../../io.ktor.client.response/-http-response/content.html">HttpResponse.content</a> as a String. You can pass an optional <a href="../../io.ktor.client.response/read-text.html#io.ktor.client.response$readText(io.ktor.client.response.HttpResponse, java.nio.charset.Charset)/charset">charset</a>
to specify a charset in the case no one is specified as part of the Content-Type response.
If no charset specified either as parameter or as part of the response,
<a href="../../io.ktor.client.response/-http-response-config/default-charset.html">HttpResponseConfig.defaultCharset</a> will be used.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.call/receive.html">receive</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <a href="../../io.ktor.client.response/-http-response/index.html"><span class="identifier">HttpResponse</span></a><span class="symbol">.</span><span class="identifier">receive</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.client.call/receive.html#T"><span class="identifier">T</span></a></code></div>

Tries to receive the payload of the <a href="#">response</a> as an specific type <a href="../../io.ktor.client.call/receive.html#T">T</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/set-cookie.html">setCookie</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message/index.html"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">setCookie</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.http/-cookie/index.html"><span class="identifier">Cookie</span></a><span class="symbol">&gt;</span></code></div>

Parse <code>Set-Cookie</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.cio/kotlinx.coroutines.-coroutine-scope/start-connection-pipeline.html">startConnectionPipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">startConnectionPipeline</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/output">output</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteWriteChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/timeout">timeout</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.cio.internals/-weak-timeout-queue/index.html"><span class="identifier">WeakTimeoutQueue</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.cio/-http-request-handler.html"><span class="identifier">HttpRequestHandler</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">Job</span></code></div>

Start connection HTTP pipeline invoking <a href="../../io.ktor.http.cio/kotlinx.coroutines.-coroutine-scope/start-connection-pipeline.html#io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/handler">handler</a> for every request.
Note that <a href="../../io.ktor.http.cio/kotlinx.coroutines.-coroutine-scope/start-connection-pipeline.html#io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/handler">handler</a> could be invoked multiple times concurrently due to HTTP pipeline nature


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/vary.html">vary</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message/index.html"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">vary</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">?</span></code></div>

Parse <code>Vary</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/kotlinx.coroutines.-coroutine-scope/write-multiple-ranges.html">writeMultipleRanges</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">writeMultipleRanges</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$writeMultipleRanges(kotlinx.coroutines.CoroutineScope, kotlin.Function1((kotlin.ranges.LongRange, kotlinx.coroutines.io.ByteReadChannel)), kotlin.collections.List((kotlin.ranges.LongRange)), kotlin.Long, kotlin.String, kotlin.String)/channelProducer">channelProducer</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-long-range/index.html"><span class="identifier">LongRange</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$writeMultipleRanges(kotlinx.coroutines.CoroutineScope, kotlin.Function1((kotlin.ranges.LongRange, kotlinx.coroutines.io.ByteReadChannel)), kotlin.collections.List((kotlin.ranges.LongRange)), kotlin.Long, kotlin.String, kotlin.String)/ranges">ranges</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-long-range/index.html"><span class="identifier">LongRange</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$writeMultipleRanges(kotlinx.coroutines.CoroutineScope, kotlin.Function1((kotlin.ranges.LongRange, kotlinx.coroutines.io.ByteReadChannel)), kotlin.collections.List((kotlin.ranges.LongRange)), kotlin.Long, kotlin.String, kotlin.String)/fullLength">fullLength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$writeMultipleRanges(kotlinx.coroutines.CoroutineScope, kotlin.Function1((kotlin.ranges.LongRange, kotlinx.coroutines.io.ByteReadChannel)), kotlin.collections.List((kotlin.ranges.LongRange)), kotlin.Long, kotlin.String, kotlin.String)/boundary">boundary</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$writeMultipleRanges(kotlinx.coroutines.CoroutineScope, kotlin.Function1((kotlin.ranges.LongRange, kotlinx.coroutines.io.ByteReadChannel)), kotlin.collections.List((kotlin.ranges.LongRange)), kotlin.Long, kotlin.String, kotlin.String)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteReadChannel</span></code></div>

Start multirange response writer coroutine


</td>
</tr>
</tbody>
</table>
