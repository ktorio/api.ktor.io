---
title: EngineSSLConnectorBuilder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.engine</a> / <a href="./index.html">EngineSSLConnectorBuilder</a></div>

# EngineSSLConnectorBuilder

<div class="signature"><code><span class="keyword">class </span><span class="identifier">EngineSSLConnectorBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-engine-connector-builder/index.html"><span class="identifier">EngineConnectorBuilder</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-engine-s-s-l-connector-config/index.html"><span class="identifier">EngineSSLConnectorConfig</span></a></code></div>

Mutable implementation of EngineSSLConnectorConfig for building connectors programmatically

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">EngineSSLConnectorBuilder</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.EngineSSLConnectorBuilder$<init>(java.security.KeyStore, kotlin.String, kotlin.Function0((kotlin.CharArray)), kotlin.Function0((kotlin.CharArray)))/keyStore">keyStore</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/security/KeyStore.html"><span class="identifier">KeyStore</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.EngineSSLConnectorBuilder$<init>(java.security.KeyStore, kotlin.String, kotlin.Function0((kotlin.CharArray)), kotlin.Function0((kotlin.CharArray)))/keyAlias">keyAlias</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.EngineSSLConnectorBuilder$<init>(java.security.KeyStore, kotlin.String, kotlin.Function0((kotlin.CharArray)), kotlin.Function0((kotlin.CharArray)))/keyStorePassword">keyStorePassword</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-array/index.html"><span class="identifier">CharArray</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.EngineSSLConnectorBuilder$<init>(java.security.KeyStore, kotlin.String, kotlin.Function0((kotlin.CharArray)), kotlin.Function0((kotlin.CharArray)))/privateKeyPassword">privateKeyPassword</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-array/index.html"><span class="identifier">CharArray</span></a><span class="symbol">)</span></code></div>

Mutable implementation of EngineSSLConnectorConfig for building connectors programmatically


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="key-alias.html">keyAlias</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">keyAlias</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

TLS key alias


</td>
</tr>
<tr>
<td markdown="1">

<a href="key-store.html">keyStore</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">keyStore</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/security/KeyStore.html"><span class="identifier">KeyStore</span></a></code></div>

KeyStore where a certificate is stored


</td>
</tr>
<tr>
<td markdown="1">

<a href="key-store-password.html">keyStorePassword</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">keyStorePassword</span><span class="symbol">: </span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-array/index.html"><span class="identifier">CharArray</span></a></code></div>

Keystore password provider


</td>
</tr>
<tr>
<td markdown="1">

<a href="key-store-path.html">keyStorePath</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">keyStorePath</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">?</span></code></div>

File where the keystore is located


</td>
</tr>
<tr>
<td markdown="1">

<a href="private-key-password.html">privateKeyPassword</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">privateKeyPassword</span><span class="symbol">: </span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-array/index.html"><span class="identifier">CharArray</span></a></code></div>

Private key password provider


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-engine-connector-builder/host.html">host</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">var </span><span class="identifier">host</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

The network interface this host binds to as an IP address or a hostname.  If null or 0.0.0.0, then bind to all interfaces.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-engine-connector-builder/port.html">port</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">var </span><span class="identifier">port</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

The port this application should be bound to.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-engine-connector-builder/type.html">type</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">val </span><span class="identifier">type</span><span class="symbol">: </span><a href="../-connector-type/index.html"><span class="identifier">ConnectorType</span></a></code></div>

Type of the connector, e.g HTTP or HTTPS.


</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-engine-connector-builder/to-string.html">toString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">toString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>
