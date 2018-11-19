---
title: EngineConnectorConfig - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.engine</a> / <a href="./index.html">EngineConnectorConfig</a></div>

# EngineConnectorConfig

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">EngineConnectorConfig</span></code></div>

Represents a connector configuration.

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="host.html">host</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">host</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

The network interface this host binds to as an IP address or a hostname.  If null or 0.0.0.0, then bind to all interfaces.


</td>
</tr>
<tr>
<td markdown="1">

<a href="port.html">port</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">port</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

The port this application should be bound to.


</td>
</tr>
<tr>
<td markdown="1">

<a href="type.html">type</a>


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

<a href="../-engine-connector-builder/index.html">EngineConnectorBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">EngineConnectorBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">EngineConnectorConfig</span></a></code></div>

Mutable implementation of EngineConnectorConfig for building connectors programmatically


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-engine-s-s-l-connector-config/index.html">EngineSSLConnectorConfig</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">EngineSSLConnectorConfig</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">EngineConnectorConfig</span></a></code></div>

Represents an SSL connector configuration.


</td>
</tr>
</tbody>
</table>
