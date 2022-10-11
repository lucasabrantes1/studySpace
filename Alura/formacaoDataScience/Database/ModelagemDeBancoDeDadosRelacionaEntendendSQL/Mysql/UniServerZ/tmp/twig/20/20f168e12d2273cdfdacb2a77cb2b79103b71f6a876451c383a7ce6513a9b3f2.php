<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* server/privileges/delete_user_fieldset.twig */
class __TwigTemplate_43f5dcf13eed36db2ada96b23f3a18706b174e41a17f0abc36b1b61d0c315005 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<fieldset id=\"fieldset_delete_user\">
    <legend>
        ";
        // line 3
        echo PhpMyAdmin\Util::getIcon("b_usrdrop");
        echo _gettext("Remove selected user accounts");
        // line 4
        echo "    </legend>
    <input type=\"hidden\" name=\"mode\" value=\"2\">
    <p>(";
        // line 6
        echo _gettext("Revoke all active privileges from the users and delete them afterwards.");
        echo ")</p>
    <input type=\"checkbox\" title=\"";
        // line 7
        echo _gettext("Drop the databases that have the same names as the users.");
        echo "\"
        name=\"drop_users_db\" id=\"checkbox_drop_users_db\">
    <label for=\"checkbox_drop_users_db\"
        title=\"";
        // line 10
        echo _gettext("Drop the databases that have the same names as the users.");
        echo "\">
        ";
        // line 11
        echo _gettext("Drop the databases that have the same names as the users.");
        // line 12
        echo "    </label>
</fieldset>

<fieldset id=\"fieldset_delete_user_footer\" class=\"tblFooters\">
    <input id=\"buttonGo\" class=\"btn btn-primary ajax\" type=\"submit\" name=\"delete\" value=\"";
        // line 16
        echo _gettext("Go");
        echo "\">
</fieldset>
";
    }

    public function getTemplateName()
    {
        return "server/privileges/delete_user_fieldset.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  70 => 16,  64 => 12,  62 => 11,  58 => 10,  52 => 7,  48 => 6,  44 => 4,  41 => 3,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "server/privileges/delete_user_fieldset.twig", "D:\\Personal\\UniformServer\\Test\\UniServerZ\\home\\us_opt1\\templates\\server\\privileges\\delete_user_fieldset.twig");
    }
}
