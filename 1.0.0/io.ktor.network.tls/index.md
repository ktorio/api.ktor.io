---
title: io.ktor.network.tls - 
layout: api
---



## Package io.ktor.network.tls

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-c-i-o-cipher-suites/index.html">CIOCipherSuites</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">CIOCipherSuites</span></code></div>

CIO cipher suites collection
https://www.ietf.org/rfc/rfc5289.txt
https://tools.ietf.org/html/rfc5288#section-3


</td>
</tr>
<tr>
<td markdown="1">

<a href="-cipher-suite/index.html">CipherSuite</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">CipherSuite</span></code></div>

Represents a TLS cipher suite


</td>
</tr>
<tr>
<td markdown="1">

<a href="-secret-exchange-type/index.html">SecretExchangeType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">SecretExchangeType</span></code></div>

TLS secret key exchange type


</td>
</tr>
<tr>
<td markdown="1">

<a href="-server-key-exchange-type/index.html">ServerKeyExchangeType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">ServerKeyExchangeType</span></code></div>

Server key exchange type with it's <a href="-server-key-exchange-type/code.html">code</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-t-l-s-alert-level/index.html">TLSAlertLevel</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">TLSAlertLevel</span></code></div>

TLS alert level


</td>
</tr>
<tr>
<td markdown="1">

<a href="-t-l-s-alert-type/index.html">TLSAlertType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">TLSAlertType</span></code></div>

TLS alert types with codes


</td>
</tr>
<tr>
<td markdown="1">

<a href="-t-l-s-handshake/index.html">TLSHandshake</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">TLSHandshake</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-t-l-s-handshake-type/index.html">TLSHandshakeType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">TLSHandshakeType</span></code></div>

TLS handshake record type


</td>
</tr>
<tr>
<td markdown="1">

<a href="-t-l-s-record/index.html">TLSRecord</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">TLSRecord</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-t-l-s-record-type/index.html">TLSRecordType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">TLSRecordType</span></code></div>

TLS record type with it's numeric <a href="-t-l-s-record-type/code.html">code</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-t-l-s-version/index.html">TLSVersion</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">TLSVersion</span></code></div>

TLS version


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="tls.html">tls</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.network.sockets/-socket.html"><span class="identifier">Socket</span></a><span class="symbol">.</span><span class="identifier">tls</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls$tls(io.ktor.network.sockets.Socket, , javax.net.ssl.X509TrustManager, kotlin.String, kotlin.collections.List((io.ktor.network.tls.CipherSuite)), kotlin.String)/coroutineContext">coroutineContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls$tls(io.ktor.network.sockets.Socket, , javax.net.ssl.X509TrustManager, kotlin.String, kotlin.collections.List((io.ktor.network.tls.CipherSuite)), kotlin.String)/trustManager">trustManager</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/javax/net/ssl/X509TrustManager.html"><span class="identifier">X509TrustManager</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls$tls(io.ktor.network.sockets.Socket, , javax.net.ssl.X509TrustManager, kotlin.String, kotlin.collections.List((io.ktor.network.tls.CipherSuite)), kotlin.String)/randomAlgorithm">randomAlgorithm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"NativePRNGNonBlocking"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls$tls(io.ktor.network.sockets.Socket, , javax.net.ssl.X509TrustManager, kotlin.String, kotlin.collections.List((io.ktor.network.tls.CipherSuite)), kotlin.String)/cipherSuites">cipherSuites</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="-cipher-suite/index.html"><span class="identifier">CipherSuite</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;CIOCipherSuites.SupportedSuites<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls$tls(io.ktor.network.sockets.Socket, , javax.net.ssl.X509TrustManager, kotlin.String, kotlin.collections.List((io.ktor.network.tls.CipherSuite)), kotlin.String)/serverName">serverName</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<br/><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.network.sockets/-socket.html"><span class="identifier">Socket</span></a></code></div>

Make <a href="../io.ktor.network.sockets/-socket.html">Socket</a> connection secure with TLS.


</td>
</tr>
</tbody>
</table>
