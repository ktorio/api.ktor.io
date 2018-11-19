---
title: EngineSSLConnectorConfig - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.engine</a> / <a href="./index.html">EngineSSLConnectorConfig</a></div>

# EngineSSLConnectorConfig

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">EngineSSLConnectorConfig</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-engine-connector-config/index.html"><span class="identifier">EngineConnectorConfig</span></a></code></div>

Represents an SSL connector configuration.

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="key-alias.html">keyAlias</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">keyAlias</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

TLS key alias


</td>
</tr>
<tr>
<td markdown="1">

<a href="key-store.html">keyStore</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">keyStore</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/security/KeyStore.html"><span class="identifier">KeyStore</span></a></code></div>

KeyStore where a certificate is stored


</td>
</tr>
<tr>
<td markdown="1">

<a href="key-store-password.html">keyStorePassword</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">keyStorePassword</span><span class="symbol">: </span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-array/index.html"><span class="identifier">CharArray</span></a></code></div>

Keystore password provider


</td>
</tr>
<tr>
<td markdown="1">

<a href="key-store-path.html">keyStorePath</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">keyStorePath</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">?</span></code></div>

File where the keystore is located


</td>
</tr>
<tr>
<td markdown="1">

<a href="private-key-password.html">privateKeyPassword</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">privateKeyPassword</span><span class="symbol">: </span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-array/index.html"><span class="identifier">CharArray</span></a></code></div>

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

<a href="../-engine-connector-config/host.html">host</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">host</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

The network interface this host binds to as an IP address or a hostname.  If null or 0.0.0.0, then bind to all interfaces.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-engine-connector-config/port.html">port</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">port</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

The port this application should be bound to.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-engine-connector-config/type.html">type</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">type</span><span class="symbol">: </span><a href="../-connector-type/index.html"><span class="identifier">ConnectorType</span></a></code></div>

Type of the connector, e.g HTTP or HTTPS.


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-engine-s-s-l-connector-builder/index.html">EngineSSLConnectorBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">EngineSSLConnectorBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-engine-connector-builder/index.html"><span class="identifier">EngineConnectorBuilder</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">EngineSSLConnectorConfig</span></a></code></div>

Mutable implementation of EngineSSLConnectorConfig for building connectors programmatically


</td>
</tr>
</tbody>
</table>
