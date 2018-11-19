---
title: io.ktor.client.utils - 
layout: api
---



## Package io.ktor.client.utils

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-byte-buffer-pool/index.html">ByteBufferPool</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ByteBufferPool</span>&nbsp;<span class="symbol">:</span>&nbsp;<span class="identifier">DefaultPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-cache-control/index.html">CacheControl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">CacheControl</span></code></div>

List of <a href="-cache-control/index.html">CacheControl</a> known values.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-empty-content.html">EmptyContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">EmptyContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.http.content/-outgoing-content/-no-content/index.html"><span class="identifier">NoContent</span></a></code></div>

Concrete <a href="../io.ktor.http.content/-outgoing-content/index.html">OutgoingContent</a> without a payload.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-d-e-f-a-u-l-t_-h-t-t-p_-b-u-f-f-e-r_-s-i-z-e.html">DEFAULT_HTTP_BUFFER_SIZE</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">const</span> <span class="keyword">val </span><span class="identifier">DEFAULT_HTTP_BUFFER_SIZE</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Size of each buffer in the <a href="-http-client-default-pool.html">HttpClientDefaultPool</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-d-e-f-a-u-l-t_-h-t-t-p_-p-o-o-l_-s-i-z-e.html">DEFAULT_HTTP_POOL_SIZE</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">const</span> <span class="keyword">val </span><span class="identifier">DEFAULT_HTTP_POOL_SIZE</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Maximum number of buffers to be allocated in the <a href="-http-client-default-pool.html">HttpClientDefaultPool</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-h-t-t-p_-c-l-i-e-n-t_-d-e-f-a-u-l-t_-d-i-s-p-a-t-c-h-e-r.html">HTTP_CLIENT_DEFAULT_DISPATCHER</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">actual</span> <span class="keyword">val </span><s><span class="identifier">HTTP_CLIENT_DEFAULT_DISPATCHER</span></s><span class="symbol">: </span><span class="identifier">CoroutineDispatcher</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-h-t-t-p_-c-l-i-e-n-t_-t-h-r-e-a-d_-c-o-u-n-t.html">HTTP_CLIENT_THREAD_COUNT</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">actual</span> <span class="keyword">val </span><s><span class="identifier">HTTP_CLIENT_THREAD_COUNT</span></s><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-client-default-pool.html">HttpClientDefaultPool</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">HttpClientDefaultPool</span><span class="symbol">: </span><a href="-byte-buffer-pool/index.html"><span class="identifier">ByteBufferPool</span></a></code></div>

Singleton pool of <a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html">ByteBuffer</a> objects used for <a href="#">HttpClient</a>.


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="build-headers.html">buildHeaders</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">buildHeaders</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.utils$buildHeaders(kotlin.Function1((io.ktor.http.HeadersBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-headers-builder/index.html"><span class="identifier">HeadersBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="wrap-headers.html">wrapHeaders</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="identifier">wrapHeaders</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.utils$wrapHeaders(io.ktor.http.content.OutgoingContent, kotlin.Function1((io.ktor.http.Headers, )))/block">block</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a></code></div>

Generates a new <a href="../io.ktor.http.content/-outgoing-content/index.html">OutgoingContent</a> of the same abstract type
but with <a href="../io.ktor.http.content/-outgoing-content/headers.html">OutgoingContent.headers</a> transformed by the specified <a href="wrap-headers.html#io.ktor.client.utils$wrapHeaders(io.ktor.http.content.OutgoingContent, kotlin.Function1((io.ktor.http.Headers, )))/block">block</a>.


</td>
</tr>
</tbody>
</table>
