if  [ -z "$1" ]; then
	ansible-galaxy collection install -r requirements.yml
	ansible-playbook Build_NagImage.yml
fi

if [ "$1" = "--skip-install" ]; then
        ansible-playbook Build_NagImage.yml --skip-tags "install"
fi
